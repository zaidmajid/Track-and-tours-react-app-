import React, { useEffect, useRef } from "react";
import {
  FaUtensils,
  FaSwimmer,
  FaHiking,
  FaSwimmingPool,
  FaSpa,
} from "react-icons/fa";
import "../styles/Services.css";

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.classList.add("page-visible");
          } else {
            document.documentElement.classList.remove("page-visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="services">
      <div ref={servicesRef} className="container_Services">
        <h2>Experience Once In Your Life Time</h2>
        <p className="services-description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <div className="service-list">
          <div className="service-item">
            <FaUtensils className="service-icon" />
            <h3>Good Food</h3>
            <p>
              Enjoy delicious meals prepared by top chefs with fresh, local
              ingredients.
            </p>
          </div>
          <div className="service-item">
            <FaSwimmer className="service-icon" />
            <h3>Swimming Pool</h3>
            <p>
              Relax and unwind in our luxurious swimming pool with a stunning
              view.
            </p>
          </div>
          <div className="service-item">
            <FaHiking className="service-icon" />
            <h3>Hiking Trails</h3>
            <p>Explore scenic hiking trails and enjoy the beauty of nature.</p>
          </div>
          <div className="service-item">
            <FaSwimmingPool className="service-icon" />
            <h3>Beach Resort</h3>
            <p>
              Relax and unwind at our beach resort with stunning ocean views and
              luxurious amenities.
            </p>
          </div>
          <div className="service-item">
            <FaUtensils className="service-icon" />
            <h3>Fine Dining</h3>
            <p>Savor gourmet dishes in our exquisite fine dining restaurant.</p>
          </div>
          <div className="service-item">
            <FaSpa className="service-icon" />
            <h3>Spa & Wellness</h3>
            <p>
              Indulge in our spa treatments and wellness programs for a
              rejuvenating experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
