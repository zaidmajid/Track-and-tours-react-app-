import React, { useState } from "react";
import "../styles/Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaBars, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="contact" className="contact__section">
      <div className="contact__header">
        <div className="contact__headerOverlay">
          <div className="contact__logo">Hepta</div>
          <div className="contact__menuIcon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          {isOpen && <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />}
          <h1 className="contact__headerTitle">Contact Us</h1>
          <p className="contact__headerSubtitle">We’d love to hear from you!</p>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__formContainer">
          <form className="contact__form">
            <h2>Get in Touch</h2>
            <div className="contact__formGroup">
              <div className="contact__formGroupInline">
                <div className="contact__formGroupItem">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="contact__formGroupItem">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
              </div>
            </div>
            <div className="contact__formGroup">
              <div className="contact__formGroupItem">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" placeholder="Your Phone Number" />
              </div>
            </div>
            <div className="contact__formGroup">
              <div className="contact__formGroupItem">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact__details">
          <div className="contact__detailsContainer">
            <h2>Contact Details</h2>
            <p>
              <strong className="contact__detailsHeading">Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong className="contact__detailsHeading">Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong className="contact__detailsHeading">Email:</strong> info@example.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
