import React, { useEffect } from 'react';
import 'waypoints/lib/noframework.waypoints.min.js'; // Import Waypoints

function Skills() {
  useEffect(() => {
    // Initialize Waypoints for the skills content
    const skillsContent = document.querySelector('.skills-content');
    if (skillsContent) {
      new window.Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function (direction) {
          const progressBars = document.querySelectorAll('.progress .progress-bar');
          progressBars.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        },
      });
    }
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src="/img/skills.png" className="img-fluid" alt="Skills" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Technologies Used</h3>
            <p className="fst-italic">
              Here's a breakdown of the key technologies powering the Health Monitoring System.
            </p>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">Python (Backend and Data Analysis) <i className="val">40%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">JavaScript (Frontend and Interactivity) <i className="val">35%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">HTML & CSS (UI/UX Design) <i className="val">15%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">IoT Integration <i className="val">10%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
