import React, { useState } from "react";
import axios from "axios";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import Cliens from "./Cliens";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const name = "Login"; // Customize the button name if needed.

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/login/", { email, password });
      setMessage(response.data.message || "Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.error || "Login failed.");
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
            <form
              onSubmit={handleSubmit}
              method="post"
              className="php-email-form"
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" disabled={loading}>
                  {loading ? "Loading..." : name}
                </button>
              </div>
              {message && (
                <p
                  className={`form-message ${
                    message.toLowerCase().includes("success")
                      ? "success"
                      : "error"
                  }`}
                >
                  {message}
                </p>
              )}
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

export default Login;
