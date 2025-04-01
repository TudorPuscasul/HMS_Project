import React from "react";
import Services from "../components/Services";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Cliens from "../components/Cliens";

const Technologies = () => {
  return (
    <div>
      <Cliens />
      <section id="technologies" className="technologies">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Technologies</h2>
            <p>
              Explore the cutting-edge technologies powering our Wedding Venue Customizer. These tools and frameworks enable seamless real-time rendering, 3D venue modeling, and interactive customization for event planners and clients.
            </p>
          </div>
          <Services />
        </div>
      </section>
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Technologies;
