import React, { useEffect, useRef } from "react";
import "../styles/Courses.css";
import destinationImage1 from "/images/destination1.jpg";
import destinationImage2 from "/images/destination2.jpg";
import destinationImage3 from "/images/destination3.jpg";
import destinationImage4 from "/images/destination4.jpg";

const Courses = () => {
  const destinations = [
    {
      name: "Food and Wine",
      stars: 5,
      reviews: 120,
      image: destinationImage1,
    },
    {
      name: "Adventure and Sports",
      stars: 4,
      reviews: 89,
      image: destinationImage2,
    },
    {
      name: "Historical Places",
      stars: 4.5,
      reviews: 150,
      image: destinationImage3,
    },
    {
      name: "Beach Resorts",
      stars: 4.8,
      reviews: 200,
      image: destinationImage4,
    },
  ];

  const destinationRefs = useRef([]);
  const textRefs = useRef([]);

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
      {
        threshold: 0.1,
      }
    );

    destinationRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    textRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      destinationRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });

      textRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="top-destination" className="top-destination">
      <div className="container_destination">
        <h2 ref={(el) => (textRefs.current[0] = el)}>Top Destination</h2>
        <p ref={(el) => (textRefs.current[1] = el)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
        <div className="destination-list">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="destination-item"
              ref={(el) => (destinationRefs.current[index] = el)}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />
              <h3>{destination.name}</h3>
              <div className="destination-details">
                <div className="stars">
                  {"★".repeat(Math.floor(destination.stars))}
                  {"☆".repeat(5 - Math.floor(destination.stars))}
                </div>
                <div className="reviews">{destination.reviews} reviews</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
