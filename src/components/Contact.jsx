import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about our services, need assistance, 
        or want to give feedback, feel free to reach out to us through any of the following methods.
      </p>

      <section>
        <h2>Email Us</h2>
        <p>For general inquiries: <a href="mailto:support@techoverflow.com">support@techoverflow.com</a></p>
        <p>For business inquiries: <a href="mailto:business@techoverflow.com">business@techoverflow.com</a></p>
      </section>

      <section>
        <h2>Call Us</h2>
        <p>Customer Support: +91 9727429328</p>
        <p>Office Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
      </section>

      <section>
        <h2>Visit Us</h2>
        <p>We’re located at:</p>
        <address>
          Galaxy Towers, Viman Nagar,<br />
          Pune, Maharashtra, IND
        </address>
        <p>
          <a 
            href="https://www.google.com/maps/place/Galaxy+Towers,+Viman+Nagar,+Pune" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>
      </section>
      <section>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.9123456789!3d18.5678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2babc12345678%3A0x9876543210abcdef!2sGalaxy+Towers%2C+Viman+Nagar%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1695567801234!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section>
        <h2>Follow Us</h2>
        <p>Stay updated through our social media channels:</p>
        <ul className='social-links-list'>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
