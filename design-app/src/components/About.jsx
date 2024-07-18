import React, { useState, useEffect } from "react";
import "../styles/About.css";
import aboutImage from "/images/image7.jpg";
import galleryImage1 from "../../public/images/image1.jpg";
import galleryImage2 from "../../public/images/image2.jpg";
import galleryImage3 from "../../public/images/image3.jpg";
import galleryImage4 from "../../public/images/image4.jpg";
import galleryImage5 from "../../public/images/image5.jpg";
import galleryImage6 from "../../public/images/image6.jpg";
import galleryImage9 from "../../public/images/image9.jpg";
import galleryImage8 from "../../public/images/image8.jpg";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

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

  return (
    <section id="about" className="about__section">
      <div className="about__container">
        <h2 className="about__title">About Us</h2>
        <p className="about__description">
          Welcome to our hotel! We provide the best services to make your stay
          memorable.
        </p>
        <img src={aboutImage} alt="About Us" className="about__image" />

        <div className="about__info">
          <h3 className="about__sectionTitle">Hotel Gallery</h3>
          <p className="about__description">
            {" "}
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
                <div
                  key={index}
                  className={`nav-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>

          <h3 className="about__sectionTitle">Our Staff</h3>
          <div className="about__staffContainer">
            <div className="about__staffMember">
              <img
                src="../images/staff1.jpg"
                alt="Staff 1"
                className="about__staffImage"
              />
              <p className="about__staffName">John Doe</p>
              <p>Manager</p>
            </div>
            <div className="about__staffMember">
              <img
                src="../images/staff2.jpg"
                alt="Staff 2"
                className="about__staffImage"
              />
              <p className="about__staffName">Jane Smith</p>
              <p>Receptionist</p>
            </div>
            <div className="about__staffMember">
              <img
                src="../images/staff3.jpg"
                alt="Staff 3"
                className="about__staffImage"
              />
              <p className="about__staffName">Michael Johnson</p>
              <p>Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
