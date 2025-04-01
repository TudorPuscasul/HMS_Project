import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

import Faq from "./Faq";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Cliens from "./Cliens";

const Register = () => {
  const [userType, setUserType] = useState("doctor"); // 'doctor' or 'patient'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "", // For doctors
    age: "", // For patients
    records: "", // For patients
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const name = "Register";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      ...(userType === "doctor" && { specialization: formData.specialization }),
      ...(userType === "patient" && { age: formData.age, records: formData.records }),
    };

    try {
      const response = await axios.post("/api/register/", { ...payload, userType });
      setMessage(response.data.message || "Registration successful!");
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      setMessage(error.response?.data?.error || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <Cliens/>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 style={{ marginTop: "40px" }}>{name}</h2>
          <p>
          The Health Monitoring System (HMS) is engineered to harness the power of the Internet of Things (IoT) to enhance healthcare delivery and patient management. Designed with the latest advancements in sensor technology and data analytics, HMS offers a proactive approach to monitoring patient health metrics in real-time.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-3 mt-lg-0 d-flex align-items-stretch"></div>
          <div className="col-lg-6 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} method="post" className="php-email-form">
              <div className="button-group text-center mb-4">
                <button
                  type="button"
                  className={`btn ${userType === "doctor" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setUserType("doctor")}
                >
                  Register as Doctor
                </button>
                <button
                  type="button"
                  className={`btn ${userType === "patient" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setUserType("patient")}
                >
                  Register as Patient
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>

              {userType === "doctor" && (
                <div className="form-group">
                  <label htmlFor="specialization">Specialization</label>
                  <input
                    className="form-control"
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Specialization"
                    required
                  />
                </div>
              )}

              {userType === "patient" && (
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    className="form-control"
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                  />
                  <label htmlFor="records">Medical Records</label>
                  <textarea
                    className="form-control"
                    id="records"
                    name="records"
                    value={formData.records}
                    onChange={handleChange}
                    placeholder="Medical Records"
                  />
                </div>
              )}

              <div className="text-center">
                <button type="submit" className="btn btn-success" disabled={loading}>
                  {loading ? "Loading..." : name}
                </button>
              </div>
              {message && <p className="form-message mt-3">{message}</p>}
            </form>
          </div>
        </div>
      </div>
      <footer id="footer">
                <FooterTop/>
                <FooterBottom/>
      </footer>
    </section>
  );
};

export default Register;
