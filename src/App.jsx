import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import TwoD_Staging from "./Components/TwoD_Staging/TwoD_Staging";
import Testimonial from "./Components/Testimonial/Testimonial";
import FeedbackForm3D from "./Components/Feedback/Feedback";
import Hero from "./Components/Hero/Hero";
import Cards from "./Components/Cards/Cards";

const App = () => {
  

  return (
    <div>
      <section id="Hero">
        <Hero />
      </section>
      <section id="Cards">
        <Cards />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="TwoD_Staging">
        <TwoD_Staging />
      </section>
      <section id="Testimonial">
        <Testimonial />
      </section>
      <section id="Feedback">
        <FeedbackForm3D />
      </section>
      <section id="Footer">
        <Footer />
      </section>
     
    </div>
  );
};

export default App;
