import React from 'react';

function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>Why Choose <strong>US</strong></h3>
              <p>
              Discover the key features and benefits of our platform that set us apart from the rest.
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Comprehensive System Design <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                    Our system is structured to ensure maximum scalability and security, meeting global standards such as HIPAA for privacy and GDPR for data protection. The HMS architecture supports a range of functionalities from basic health monitoring to advanced data analysis, enabling healthcare providers to deliver personalized care plans.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Inter-module Communication <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Seamless integration between modules is achieved through well-defined interfaces that ensure data flows smoothly from one component to the next without loss of integrity or security. This integration supports real-time health monitoring and interactive feedback systems.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Detailed System Operation <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Each module is meticulously designed to function both independently and collaboratively, ensuring that the entire system operates efficiently and effectively. The Sensor Monitoring Module sends real-time data to the Data Analysis Module, where it is immediately processed. Results then trigger responses from the Notification Module when necessary, ensuring that all stakeholders are kept informed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: `url(/img/why-us.png)` }} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
