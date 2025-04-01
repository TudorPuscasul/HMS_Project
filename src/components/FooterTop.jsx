import React from 'react';

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Health Monitoring System</h3>
            <p>
            Splaiul Independenței 313, <br />
            București, 060042<br />
            Romania <br /><br />
              <strong>Phone:</strong> 0730 309 671<br />
              <strong>Email:</strong> healthmonitoring@info.com<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/#hero">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/#about">Overview</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/technology">Technologies</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Contact and Support</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Contact Us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Send Feedback</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#">Help</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>Stay connected with us for updates and support.</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FooterTop;
