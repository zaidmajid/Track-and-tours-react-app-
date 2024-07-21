import React, { useEffect, useRef } from "react";
import "../styles/Blog.css";
import blogImage1 from "/images/blog1.jpg";
import blogImage2 from "/images/blog2.jpg";
import blogImage3 from "/images/blog3.jpg";

const Blog = () => {
  const blogRef = useRef(null);
  const blogItemsRef = useRef([]);

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

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }

    blogItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
      blogItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const blogPosts = [
    {
      title: "45 Best Places To Unwind",
      date: "January 15, 2023",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: blogImage1,
    },
    {
      title: "The Ultimate Travel Guide",
      date: "February 10, 2023",
      excerpt:
        "Discover the best travel tips and hidden gems that will make your journey unforgettable.",
      image: blogImage2,
    },
    {
      title: "Top 10 Adventure Destinations",
      date: "March 5, 2023",
      excerpt:
        "Get ready for an adrenaline rush with these top adventure destinations around the world.",
      image: blogImage3,
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container_blog" ref={blogRef}>
        <div className="blog-header">
          <h2 className="blog-heading">Our Blogs</h2>
          <p className="blog-paragraph">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-item"
              ref={(el) => (blogItemsRef.current[index] = el)}
            >
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
