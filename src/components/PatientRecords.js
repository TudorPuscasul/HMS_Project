import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch patient records
    const fetchRecords = async () => {
      try {
        const response = await axios.get("/api/patient/records/");
        setRecords(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch records.");
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (loading) {
    return <div className="loading-message">Loading records...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="patient-records">
      {records.length > 0 ? (
        <table className="records-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Glucose (mg/dL)</th>
              <th>Oxygen Saturation (%)</th>
              <th>Symptoms</th>
              <th>Diagnosis</th>
              <th>Medications</th>
              <th>Follow-Up Date</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.blood_glucose || "N/A"}</td>
                <td>{record.oxygen_saturation || "N/A"}</td>
                <td>{record.symptoms || "N/A"}</td>
                <td>{record.diagnosis || "N/A"}</td>
                <td>{record.medications || "N/A"}</td>
                <td>{record.follow_up_date || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data-message">No records available.</div>
      )}
    </div>
  );
};

export default PatientRecords;
