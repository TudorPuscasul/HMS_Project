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
              Explore the cutting-edge technologies powering our Health Monitoring System (HMS). These tools and frameworks enable seamless integration, real-time monitoring, and advanced data analytics to enhance patient care and system efficiency.
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
