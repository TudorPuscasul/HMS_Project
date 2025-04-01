import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Overview</h2>
        </div>
        <div className="row content">
            <p>
            Our system is structured to ensure maximum scalability and security, meeting global standards such as HIPAA for privacy and GDPR for data protection. The HMS architecture supports a range of functionalities from basic health monitoring to advanced data analysis, enabling healthcare providers to deliver personalized care plans.
            </p>
          <div className="col-lg-6">
            <ul>
              <li><i className="ri ri-check-double-line"></i><strong>Sensor Monitoring Module:</strong> This module utilizes advanced sensors to continuously gather health data such as heart rate, blood pressure, and blood glucose levels, ensuring accurate and timely capture of patient vitals.</li>
              <li><i className="ri ri-check-double-line"></i><strong>Data Analysis Module:</strong> Leveraging powerful analytical tools, this module processes raw data to identify trends and detect anomalies. It plays a crucial role in early warning and preventive healthcare.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li><i className="ri ri-check-double-line"></i><strong>Notification Module:</strong> Critical alerts and health updates are communicated through this module, which uses various communication channels to inform both patients and doctors of important health events immediately.</li>
              <li><i className="ri ri-check-double-line"></i><strong>User Interface Module:</strong> Designed for ease of use, this module provides patients and healthcare providers with access to health data and system functionalities through a clean and intuitive interface.</li>
            </ul>
          </div>
            <p>
              This project integrates a robust Django backend with a responsive React frontend to provide a seamless experience for managing health data and monitoring patient vitals.
            </p>
            <div className="col-lg-6">
            <a href="/technology" className="btn-learn-more">Learn More</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
