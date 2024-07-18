import React from "react";
import "../styles/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container_footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Rooms</h3>
            <ul>
              <li>
                <a href="#support">Support</a>
              </li>
              <li>
                <a href="#location">Our Location</a>
              </li>
              <li>
                <a href="#hosts">The Hosts</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#restaurant">Restaurant</a>
              </li>
            </ul>
            <div className="contact-info">
              <p>
                <strong>Address:</strong> 98 West 21th Street, Suite 721, New
                York, NY 10016
              </p>
              <p>
                <strong>Phone:</strong> (+1) 435 3533
              </p>
              <p>
                <strong>Email:</strong> info@yourdomain.com
              </p>
            </div>
          </div>
          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter:</p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit" className="subscribe-button">
                <FaPaperPlane className="icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="social-links">
          <a href="#facebook">
            <FaFacebook />
          </a>
          <a href="#twitter">
            <FaTwitter />
          </a>
          <a href="#instagram">
            <FaInstagram />
          </a>
        </div>
        <p className="copyright">&copy; 2024 Hepta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
