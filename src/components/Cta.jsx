import React from 'react';

function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Transforming Healthcare Monitoring</h3>
            <p>
              Our Health Monitoring System provides real-time insights into patient health metrics, enabling proactive care and timely interventions. With seamless data integration, secure communication, and an intuitive interface, our platform is designed to empower both patients and healthcare providers to achieve better health outcomes.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
