import React, { useState } from "react";
import axios from "axios";

const PatientAddRecordForm = () => {
  const [formData, setFormData] = useState({
    blood_glucose: "",
    oxygen_saturation: "",
    symptoms: "",
    diagnosis: "",
    medications: "",
    follow_up_date: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axios.post("/api/patient/records/add/", formData);
      setMessage("Record added successfully!");
      setFormData({
        blood_glucose: "",
        oxygen_saturation: "",
        symptoms: "",
        diagnosis: "",
        medications: "",
        follow_up_date: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to add record. Please check your inputs."
      );
    }
  };

  return (
    <div className="patient-add-record-form">
      <h2 className="form-title">Add a New Record</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blood Glucose (mg/dL):</label>
          <input
            type="number"
            name="blood_glucose"
            value={formData.blood_glucose}
            onChange={handleChange}
            required
            step="0.1"
            placeholder="e.g., 110.5"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Oxygen Saturation (%):</label>
          <input
            type="number"
            name="oxygen_saturation"
            value={formData.oxygen_saturation}
            onChange={handleChange}
            required
            step="0.1"
            placeholder="e.g., 97.8"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Symptoms:</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            placeholder="Describe your symptoms"
            className="form-input"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Diagnosis:</label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            placeholder="Diagnosis by doctor"
            className="form-input"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Medications:</label>
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            placeholder="e.g., Paracetamol 500mg"
            className="form-input"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Follow-Up Date:</label>
          <input
            type="date"
            name="follow_up_date"
            value={formData.follow_up_date}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="button form-submit-button">
          Submit Record
        </button>
      </form>
      {message && <p className="form-message success">{message}</p>}
      {error && <p className="form-message error">{error}</p>}
    </div>
  );
};

export default PatientAddRecordForm;
