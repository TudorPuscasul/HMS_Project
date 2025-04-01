import React from "react";
import PatientAddRecordForm from "../components/PatientAddRecordForm";
import PatientRecords from "../components/PatientRecords";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";
import Cliens from "../components/Cliens";
import Faq from "../components/Faq";

const PatientPage = () => {
  return (
    <div className="patient-page">
      <Cliens/>
        <div className="section-title">
            <h2>Patient Page</h2>
        </div>
      <div className="section add-record-section">
      <div className="section-title">
            <h2>Add a new record</h2>
          </div>
        <PatientAddRecordForm />
      </div>
      <div className="section records-section">
      <div className="section-title">
            <h2>Your Records</h2>
          </div>
        <PatientRecords />
      </div>

      <Cliens/>
      <Faq/>
        <footer id="footer">
            <FooterTop/>
            <FooterBottom/>
        </footer>
    </div>
  );
};

export default PatientPage;
