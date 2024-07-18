import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.css";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "./ModalVideo";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container" ref={heroRef}>
        <div className="hero-image">
          <img
            src="/images/StockCake-Yoga Nature Balance_1720803395.jpg"
            alt="Portrait"
          />
        </div>
        <div className="hero-Text">
          <h1>Welcome To Our Website</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <button className="video-button" onClick={handlePlayButtonClick}>
            <FaPlay className="play-icon" /> Play Video
          </button>
        </div>
      </div>
      <ModalVideo
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
      />
    </section>
  );
};

export default Hero;
