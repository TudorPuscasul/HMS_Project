import React from 'react';

function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <p>
            The technology powering our Health Monitoring System (HMS).
          </p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-data"></i>
              </div>
              <h4>
                IoT Sensors
              </h4>
              <p>Our system integrates advanced IoT sensors to monitor real-time health metrics such as heart rate, blood pressure, and oxygen saturation. These sensors ensure accurate data collection and seamless transmission to the central system.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-analyse"></i>
              </div>
              <h4>
                Data Analytics
              </h4>
              <p>Data collected from IoT sensors is analyzed using advanced algorithms to detect anomalies, trends, and health risks. This analytics capability enables healthcare providers to make informed decisions and deliver personalized care.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-bell"></i>
              </div>
              <h4>
                Alert System
              </h4>
              <p>Our notification module sends real-time alerts to patients and healthcare providers when critical health thresholds are breached. These alerts are delivered via mobile apps, emails, or SMS, ensuring timely action.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-shield-quarter"></i>
              </div>
              <h4>
                Secure Cloud Storage
              </h4>
              <p>All health data is stored securely in the cloud, adhering to privacy regulations such as GDPR and HIPAA. The cloud infrastructure ensures reliable access to health records for both patients and doctors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
