import React from "react";
import "./Testimonial.scss";

const testimonials = [
  {
    id: 1,
    name: "Rahul",
    role: "pune builder",
    feedback: "This service is amazing! Highly recommend it.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Abhishek",
    role: "Mumbai builder",
    feedback: "Great experience, very professional and helpful!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Aditya",
    role: "Bengalore builder",
    feedback: "Fantastic work! Will definitely use again.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimony) => (
          <div key={testimony.id} className="testimonial-card">
            <div className="testimonial-front">
              <img src={testimony.image} alt={testimony.name} />
              <h3>{testimony.name}</h3>
              <p>{testimony.role}</p>
            </div>
            <div className="testimonial-back">
              <p>"{testimony.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
