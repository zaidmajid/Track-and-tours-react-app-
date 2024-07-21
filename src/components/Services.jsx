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
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
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
          {[
            { icon: <FaUtensils />, title: "Good Food", description: "Enjoy delicious meals prepared by top chefs with fresh, local ingredients." },
            { icon: <FaSwimmer />, title: "Swimming Pool", description: "Relax and unwind in our luxurious swimming pool with a stunning view." },
            { icon: <FaHiking />, title: "Hiking Trails", description: "Explore scenic hiking trails and enjoy the beauty of nature." },
            { icon: <FaSwimmingPool />, title: "Beach Resort", description: "Relax and unwind at our beach resort with stunning ocean views and luxurious amenities." },
            { icon: <FaUtensils />, title: "Fine Dining", description: "Savor gourmet dishes in our exquisite fine dining restaurant." },
            { icon: <FaSpa />, title: "Spa & Wellness", description: "Indulge in our spa treatments and wellness programs for a rejuvenating experience." },
          ].map((service, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="service-item"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
