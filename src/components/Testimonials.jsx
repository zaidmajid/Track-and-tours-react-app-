import React from "react";
import "../styles/Testimonials.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import clientOne from "/images/client1.jpg";
import clientTwo from "/images/client2.jpg";
import clientThree from "/images/client3.jpg";

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar className="star" key={i} />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt className="star" key={i} />);
      } else {
        stars.push(<FaRegStar className="star" key={i} />);
      }
    }
    return stars;
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container_testimonials">
        <h2>Happy Customers</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <div className="client-photo">
              <img src={clientOne} alt="Client One" />
            </div>
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <div className="client-rating">{renderStars(3)}</div>
            <h3>- Bruce Wayne</h3>
          </div>
          <div className="testimonial-item">
            <div className="client-photo">
              <img src={clientTwo} alt="Client Two" />
            </div>
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.rdquo;
            </p>
            <div className="client-rating">{renderStars(4.5)}</div>
            <h3>- Tony Stark</h3>
          </div>
          <div className="testimonial-item">
            <div className="client-photo">
              <img src={clientThree} alt="Client Three" />
            </div>
            <p>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <div className="client-rating">{renderStars(4)}</div>
            <h3>- Alexandra Daddario</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
