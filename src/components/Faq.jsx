import React from 'react';
import Cliens from './Cliens';

function Faq() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Explore commonly asked questions about our Health Monitoring System. Find answers to queries about health data tracking, privacy standards, alert notifications, and doctor-patient communication.
          </p>
        </div>

        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" className="collapse" href="#faq-list-1">
                How does the system track health metrics?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>
                  The system uses IoT-enabled wearable devices to collect real-time health metrics such as heart rate, blood pressure, and oxygen saturation. These metrics are securely transmitted to a centralized database for analysis.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" href="#faq-list-2" className="collapsed">
                How does the system ensure data privacy and security?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Our system complies with global standards like GDPR and HIPAA, using advanced encryption techniques to protect health data. Only authorized users can access sensitive information.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" href="#faq-list-3" className="collapsed">
                How are critical alerts generated and sent?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Critical alerts are generated based on predefined thresholds for health metrics. These alerts are sent to patients and healthcare providers through push notifications, SMS, or email.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" href="#faq-list-4" className="collapsed">
                Can doctors provide feedback through the system?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Yes, doctors can review analyzed health data and provide feedback or recommendations through the system. Feedback is securely stored and communicated to patients via the app.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" href="#faq-list-5" className="collapsed">
                How can users view their health data history?
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>
                  Users can view historical health data, including trends and metrics, through interactive dashboards on the mobile or web applications.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Cliens/>
    </section>
  );
}

export default Faq;
