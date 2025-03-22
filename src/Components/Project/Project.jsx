import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { staggerContainer, textVariant } from "../../utils/motion";
import "./Project.scss";
import { FaShoppingCart } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "360° Digital Staging",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/ZuMBjCE83Xo/e?hidelive=true&initvars.autorotate.enabled=true",
    desc: "Whether it’s a residential home, commercial property, or hospitality space, our advanced 360° digital staging technology allows you to visualize a fully furnished environment before any physical changes take place. Tailored to your design preferences and market trends, this immersive experience enhances property appeal, accelerates sales, and maximizes investment potential.",
  },
  {
    id: 2,
    title: "360° Digital Renovation",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/ZuIBjCE-2w4/e?initvars.autorotate.enabled=true&intro_mouse_icon=false&lead_gen=true",
    desc: "Experience the future of interior design with our exclusive 360° Digital Transformation service. We digitally rejuvenate walls, floors, and ceilings, bringing new life to residential and commercial spaces. Whether it’s a complete overhaul or a refined upgrade, our cutting-edge CGI technology allows you to visualize your property’s full potential before it even comes to life.",
  },
  {
    id: 3,
    title: "Digital Full 360° CGI VR Tour",
    src: "https://LETZSTEPIN-PRIVATE-LIMITED.vr-360-tour.com/e/Zy8BjDUWHCg/e?initvars.autorotate.enabled=true&intro_mouse_icon=false&lead_gen=true&share_button=false",
    desc: "Step into the future of real estate with our cutting-edge 360° CGI technology. We transform non-existent spaces into breathtakingly realistic experiences, captivating clients with immersive, interactive walkthroughs. Say goodbye to expensive show homes and static models—our seamless, device-friendly virtual tours are accessible anytime, anywhere.",
  },
];

const ExperienceCard = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
  >
    <div>
      <h3 className="experience-title">{item.title}</h3>
      <p className="experience-company">{item.desc}</p>
      <iframe
        src={item.src}
        title={item.title}
        width="100%"
        height="300px"
        style={{ border: "none", marginTop: "10px" }}
        allowFullScreen
      ></iframe>
       <button className="buy-now-btn">
          <FaShoppingCart /> Buy Now
        </button>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="experience-section"
  >
    <motion.div variants={textVariant()}>
      <p className="experience-subtext">Tailored Services for Virtual Properties</p>
      <h2 className="experience-headtext">Virtual Tours</h2>
    </motion.div>
    <div className="experience-container">
      <VerticalTimeline>
        {items.map((item, index) => (
          <ExperienceCard key={`experience-${index}`} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  </motion.section>
);

export default Experience;
