import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/About.css";
import aboutImage from "/images/image9.jpg";
import galleryImage1 from "../../public/images/image1.jpg";
import galleryImage2 from "../../public/images/image2.jpg";
import galleryImage3 from "../../public/images/image3.jpg";
import galleryImage4 from "../../public/images/image4.jpg";
import galleryImage5 from "../../public/images/image5.jpg";
import galleryImage6 from "../../public/images/image6.jpg";
import galleryImage9 from "../../public/images/image9.jpg";
import galleryImage8 from "../../public/images/image8.jpg";
import image10 from "../../public/images/image10.jpg";
import staff1 from "../../public/images/staff1.jpg";
import staff2 from "../../public/images/staff2.jpg";
import staff3 from "../../public/images/staff3.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const About = () => {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage9,
    galleryImage8,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Refs for intersection observer
  const aboutHeaderRef = useRef(null);
  const imageTextSectionRef = useRef(null);
  const staffSectionRef = useRef(null);

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

    if (aboutHeaderRef.current) {
      observer.observe(aboutHeaderRef.current);
    }
    if (imageTextSectionRef.current) {
      observer.observe(imageTextSectionRef.current);
    }
    if (staffSectionRef.current) {
      observer.observe(staffSectionRef.current);
    }

    return () => {
      if (aboutHeaderRef.current) {
        observer.unobserve(aboutHeaderRef.current);
      }
      if (imageTextSectionRef.current) {
        observer.unobserve(imageTextSectionRef.current);
      }
      if (staffSectionRef.current) {
        observer.unobserve(staffSectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about__section">
      <div className="about__header" ref={aboutHeaderRef}>
        <div className="about__headerOverlay">
          <div className="about__logo">Hepta</div>
          <div className="about__menuIcon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isOpen && <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />}
          <h1 className="about__headerTitle">About Us</h1>
          <p className="About_line">Destination Where You Live</p>
        </div>
        <img
          src={aboutImage}
          alt="About Header"
          className="about__headerImage"
        />
      </div>
      <div className="about__container">
        <h2 className="about__title"></h2>
        <p className="about__description"></p>
        <div className="about__imageTextSection" ref={imageTextSectionRef}>
          <img
            src={image10}
            alt="Additional Info"
            className="about__sideImage"
          />
          <div className="about__text">
            <h3>Our Unique Offerings</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
          </div>
        </div>
        <div className="about__info">
          <h3 className="about__sectionTitle">Hotel Gallery</h3>
          <p className="about__description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="about__slideshow">
            <div className="prev" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </div>
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className={`about__slideshowImage ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
            <div className="next" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="nav-dots">
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <div className="about__staff" ref={staffSectionRef}>
          <h3 className="about__sectionTitle">Meet Our Team</h3>
          <div className="staff__container">
            <div className="staff__member">
              <img src={staff1} alt="Staff 1" className="staff__image" />
              <div className="staff__details">
              <p className="staff__role">Manager</p>
                <p className="staff__name">John Doe</p>
                
              </div>
            </div>
            <div className="staff__member">
              <img src={staff2} alt="Staff 2" className="staff__image" />
              <div className="staff__details">
              <p className="staff__role">Receptionist</p>
                <p className="staff__name">Jane Smith</p>
                
              </div>
            </div>
            <div className="staff__member">
              <img src={staff3} alt="Staff 3" className="staff__image" />
              <div className="staff__details">
              <p className="staff__role">Chef</p>
                <p className="staff__name">Alice Johnson</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component here */}
    </section>
  );
};

export default About;
