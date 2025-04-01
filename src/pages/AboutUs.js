import React from "react";
import FooterTop from "../components/FooterTop";
import FooterBottom from "../components/FooterBottom";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div style={{ flex: 1 }}>
        <section id="about" className="about">
          <div
            className="container"
            data-aos="fade-up"
            style={{ marginTop: "20px" }}
          >
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <p>
                Our Health Monitoring System (HMS) is designed to revolutionize
                healthcare through the integration of advanced IoT technologies
                and real-time data analytics. With a focus on security,
                scalability, and user-friendliness, HMS provides a comprehensive
                platform for monitoring and managing patient health metrics.
              </p>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <strong>Sensor Monitoring Module:</strong> Continuously
                    collects health data like heart rate and oxygen saturation
                    from wearable IoT devices.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <strong>Data Analysis Module:</strong> Processes raw data to
                    identify trends and anomalies, supporting preventive and
                    proactive healthcare.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <strong>Notification Module:</strong> Sends real-time alerts
                    to patients and doctors, ensuring prompt action during
                    critical events.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>
                    <strong>User Interface Module:</strong> Provides a
                    user-friendly platform for accessing health data, trends,
                    and notifications.
                  </li>
                </ul>
              </div>
              <p>
                Through a robust Django backend and a responsive React frontend,
                HMS bridges the gap between technology and healthcare, offering
                a seamless experience for both patients and healthcare
                providers.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <FooterTop />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default AboutUs;
