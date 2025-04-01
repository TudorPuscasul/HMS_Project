import React from "react";
import PatientList from "../components/PatientList";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Cliens from "../components/Cliens";
import Faq from "../components/Faq";

const DoctorPage = () => {
  return (
    <div>
      <Cliens />
      <section id="doctor-page" className="doctor-page">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Doctor Dashboard</h2>
            <p>
              Welcome to the Venue Management Dashboard. This platform provides tools for event planners and businesses to manage wedding venue setups, track decorations, and customize layouts in real-time. Organize your venue elements seamlessly and provide a personalized experience for your clients.
            </p>
          </div>
          <PatientList />
        </div>
      </section>
      <Faq />
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default DoctorPage;
