import React from "react";
import "./Cards.scss";

const Cards = () => {
  return (
    <div>
      <section className="hero">
        <h1>
          Customized Solution:
          <img className="img-logo" src="./public/vr.webp" alt="logo" />
          <br />
          <em>Transforming Virtual Spaces into Reality</em>
        </h1>
      </section>

      <section className="cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const cardData = [
  {
    title: "360° Digital Staging",
    desc: "Whether it’s a residential home, commercial property, or hospitality space...",
  },
  {
    title: "360° Digital Renovation",
    desc: "Experience the future of interior design with our exclusive 360° Digital Transformation service...",
  },
  {
    title: "Digital 360° CGI VR Tour",
    desc: "Step into the future of real estate with our cutting-edge 360° CGI technology...",
  },
];

export default Cards;
