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
              Welcome to the Doctor's Dashboard. This platform provides tools for managing patient health records, tracking trends, and delivering personalized care. Monitor your patients' health metrics, send notifications, and ensure proactive healthcare management with ease.
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
