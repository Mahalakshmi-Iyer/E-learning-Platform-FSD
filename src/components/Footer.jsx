import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* First Column: Site Info */}
        <div className="footer-column site-info">
          <img src="Logo.ico" alt="TechOverflow Logo" className="footer-logo" />
          <h4>TechOverflow</h4>
          <p>Your Gateway to Learning Tech Skills</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Second Column: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Third Column: Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <a href="/blog">Blog</a>
          <a href="/faq">FAQs</a>
          <a href="/support">Support</a>
          <a href="/terms">Terms of Service</a>
        </div>

        {/* Fourth Column: Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@techoverflow.com</p>
          <p>Phone: +91 9727429328</p>
          <p>Address: Galaxy Towers, Viman Nagar, Pune, IND</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 TechOverflow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;