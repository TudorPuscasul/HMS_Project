import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    // Fetch the list of patients
    const fetchPatients = async () => {
      try {
        const response = await axios.get("/api/patients/");
        setPatients(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch patients.");
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const notifyPatient = async (patientId) => {
    setNotificationMessage(""); 
    try {
      await axios.post(`/api/patients/${patientId}/notify/`);
      setNotificationMessage(`Patient ${patientId} has been notified successfully.`);
      setPatients((prev) =>
        prev.map((patient) =>
          patient.id === patientId ? { ...patient, notified: true } : patient
        )
      );
    } catch (err) {
      setNotificationMessage(
        err.response?.data?.error || `Failed to notify patient ${patientId}.`
      );
    }
  };

  if (loading) {
    return <div className="loading-message">Loading patients...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="patient-list">
      <h2 className="list-title">List of Patients</h2>
      {notificationMessage && (
        <div className="notification-message">{notificationMessage}</div>
      )}
      {patients.length > 0 ? (
        <table className="patient-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
              <th>Notified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.user.username}</td>
                <td>{patient.user.email}</td>
                <td>{patient.age}</td>
                <td>{patient.notified ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => notifyPatient(patient.id)}
                    disabled={patient.notified}
                    className={`notify-button ${
                      patient.notified ? "disabled" : ""
                    }`}
                  >
                    {patient.notified ? "Notified" : "Notify"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data-message">No patients found.</div>
      )}
    </div>
  );
};

export default PatientList;
