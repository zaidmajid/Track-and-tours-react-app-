import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaConciergeBell,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaBlog,
  FaCommentDots,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <div className="logo">
          <h1>Hepta</h1>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <button onClick={() => scrollToSection("hero")}>
                <FaHome className="nav-icon" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>
                <FaConciergeBell className="nav-icon" /> Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>
                <FaInfoCircle className="nav-icon" /> About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("top-destination")}>
                <FaMapMarkedAlt className="nav-icon" /> Top Destinations
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("events")}>
                <FaCalendarAlt className="nav-icon" /> Events
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("blog")}>
                <FaBlog className="nav-icon" /> Blog
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("testimonials")}>
                <FaCommentDots className="nav-icon" /> Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("footer")}>
                <FaEnvelope className="nav-icon" /> Contact
              </button>
            </li>
          </ul>
        </nav>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="hero-text">
          <h1 className="fade-in">Tour & Travels</h1>
          <p>A Destiny You Want. Enjoy Your Trip With Us!</p>
          <div className="scroll-down" onClick={() => scrollToSection("hero")}>
            <FaChevronDown className="scroll-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
