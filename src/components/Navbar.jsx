import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaImages,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa"; 
import "../styles/Navbar.css"; 

const UniqueNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <nav className={`unique-nav ${isOpen ? "open" : ""}`}>
      <div
        className={`unique-menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <ul className="unique-nav-links">
          <li>
            <Link to="/" className="unique-nav-link" onClick={toggleMenu}>
              <FaHome className="unique-nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/news" className="unique-nav-link" onClick={toggleMenu}>
              <FaImages className="unique-nav-icon" /> News
            </Link>
          </li>
          <li>
            <Link to="/about" className="unique-nav-link" onClick={toggleMenu}>
              <FaInfoCircle className="unique-nav-icon" /> About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="unique-nav-link"
              onClick={toggleMenu}
            >
              <FaStar className="unique-nav-icon" /> Contact Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default UniqueNavbar;
