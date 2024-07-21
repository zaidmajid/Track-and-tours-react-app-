import React, { useState, useEffect, useRef } from "react";
import "../styles/Events.css"; 
import eventImage1 from "/images/event1.jpg";
import eventImage2 from "/images/event2.jpg";
import eventImage3 from "/images/event3.jpg";
import eventImage4 from "/images/event4.jpg";
import eventImage5 from "/images/event5.jpg";
import eventImage6 from "/images/event6.jpg";

const Events = () => {
  const images = [
    eventImage1,
    eventImage2,
    eventImage3,
    eventImage4,
    eventImage5,
    eventImage6,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

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

    if (eventsRef.current) {
      observer.observe(eventsRef.current);
    }

    return () => {
      if (eventsRef.current) {
        observer.unobserve(eventsRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="events" ref={eventsRef} className="events">
      <div className="container-events">
        <h2 className="events-heading">Upcoming Events</h2>
        <p className="events-description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="slider-container">
          <div className="prev" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="image-slider">
            <img
              src={images[currentIndex]}
              alt={`Event ${currentIndex + 1}`}
              className="event-image"
            />
          </div>
          <div className="next" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="nav-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
