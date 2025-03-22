import React, { useState } from "react";
import "./Feedback.scss";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFlipped(true);
    setTimeout(() => {
      alert("Thank you for your feedback!");
      setIsFlipped(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="feedback-3d-container">
      <div className={`feedback-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="feedback-front">
          <h2>Leave Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Feedback" value={formData.message} onChange={handleChange} required />
            <button type="submit" className="animated-button">Submit</button>
          </form>
        </div>

        {/* Back Side */}
        <div className="feedback-back">
          <h2>Thank You!</h2>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
