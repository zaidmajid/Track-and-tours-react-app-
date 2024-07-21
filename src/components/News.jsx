import React, { useEffect, useRef, useState } from "react";
import "../styles/News.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import newsImage1 from "/images/news1.jpg";
import newsImage2 from "/images/news2.jpg";
import newsImage3 from "/images/news3.jpg";
import newsImage4 from "/images/news4.jpg";
import newsImage5 from "/images/news5.jpg";
import newsImage6 from "/images/news4.jpg";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const News = () => {
  const newsRef = useRef(null);
  const newsItemsRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (newsRef.current) {
      observer.observe(newsRef.current);
    }

    newsItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (newsRef.current) {
        observer.unobserve(newsRef.current);
      }
      newsItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const newsPosts = [
    {
      title: "Breaking News: Major Event",
      date: "July 15, 2023",
      excerpt: "An unexpected major event has occurred, causing significant impact.",
      image: newsImage3,
    },
    {
      title: "Technology Advances in 2023",
      date: "July 10, 2023",
      excerpt: "Exploring the latest technology advancements in various fields.",
      image: newsImage2,
    },
    {
      title: "Global Economy Trends",
      date: "July 5, 2023",
      excerpt: "Analyzing the current trends in the global economy.",
      image: newsImage3,
    },
    {
      title: "Health and Wellness Tips",
      date: "July 1, 2023",
      excerpt: "Top tips for maintaining health and wellness in 2023.",
      image: newsImage4,
    },
    {
      title: "Travel Destinations to Explore",
      date: "June 25, 2023",
      excerpt: "Discover the top travel destinations to explore this year.",
      image: newsImage5,
    },
    {
      title: "Environmental Conservation Efforts",
      date: "June 20, 2023",
      excerpt: "Highlighting the latest efforts in environmental conservation.",
      image: newsImage6,
    },
  ];

  const popularPosts = [
    {
      title: "Free Template by Colorlib",
      date: "February 27, 2018",
      image: "/images/news1.jpg",
    },
    {
      title: "Free Template by Colorlib",
      date: "February 27, 2018",
      image: "/images/news2.jpg",
    },
    {
      title: "Free Template by Colorlib",
      date: "February 27, 2018",
      image: "/images/news3.jpg",
    },
    {
      title: "Free Template by Colorlib",
      date: "February 27, 2018",
      image: "/images/news4.jpg",
    },
    {
      title: "Free Template by Colorlib",
      date: "February 27, 2018",
      image: "/images/news5.jpg",
    },
  ];

  const categories = [
    { name: "Events", count: 12 },
    { name: "Resto bar", count: 4 },
    { name: "Celebration", count: 23 },
    { name: "Promos", count: 8 },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="news" className="news__section">
      <div className="news__header">
        <div className="news__headerOverlay">
          <div className="news__logo">Hepta</div>
          <div className="news__menuIcon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isOpen && <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />}
          <h1 className="news__headerTitle">News</h1>
          <p className="news__headerSubtitle">Stay updated with the latest news</p>
        </div>
      </div>
      <div className="news__container">
        <div className="news__content" ref={newsRef}>
          <div className="news__headerCenter">
            <h2 className="news__heading">Latest News</h2>
            <p className="news__paragraph">
              Catch up with the most recent updates and articles.
            </p>
          </div>
          <div className="news__list">
            {newsPosts.map((post, index) => (
              <div
                key={index}
                className="news__item"
                ref={(el) => (newsItemsRef.current[index] = el)}
              >
                <img src={post.image} alt={post.title} className="news__image" />
                <div className="news__content">
                  <p className="news__date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p className="news__excerpt">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="news__sidebar">
          <div className="news__searchBar">
            <input type="text" placeholder="Search news..." />
            <button><FaSearch /></button>
          </div>
          <div className="news__popularPosts">
            <h3>Popular Posts</h3>
            {popularPosts.map((post, index) => (
              <div key={index} className="news__popularItem">
                <img src={post.image} alt={post.title} className="news__popularImage" />
                <div>
                  <p className="news__date">{post.date}</p>
                  <p>{post.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="news__categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  {category.name} <span>({category.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default News;
