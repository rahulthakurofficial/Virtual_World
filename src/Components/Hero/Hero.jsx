import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Logo Image in the Top Left Corner (From Public Folder) */}
      <img src="/logoLetzstepin.png" alt="Logo" className="logo" />

      {/* 3D Animated Hero Section */}
      <div className="hero-content">
        <h1 className="hero-title">
          Virtualise your <span className="gradient-text">World</span>
        </h1>
        <p className="hero-subtitle">
        Bring your imaginative world to vivid virtual life. Embark on virtual 
        opulence with India's foremost 360° tour & CGI expert, revitalizing your digital experience.
        </p>
        <button className="hero-button">Get Started</button>
      </div>

      {/* Floating 3D Shapes for Depth Effect */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Hero;
