import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
     
      <div className="text-container">


         <footer className="footer">
      <div className="footer-section">
        <h3>Write to Us</h3>
        <p>If you have any queries or concerns, feel free to write to us at:</p>
       
        <p><strong>Email:</strong> lifecare@gmail.com</p>
        <p><strong>Corporate Office:</strong> Govindapuram,calicut</p>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p><strong>Toll-Free:</strong> 1-800-123-456</p>
        <p><strong>Phone:</strong> 0494 2-567-890</p>
        <p><strong>Office Hours:</strong> Mon-Fri, 9AM - 6PM</p>
      </div>

      <div className="footer-section">
        <h3>Our Centers</h3>
        <p><strong>Headquarters:</strong>Life Care Institute Of Medical Science west nadakkavu,calicut</p>
        <p><strong>Support Center:</strong>Life care hospitals,santhi line road,Mavoor Road,calicut </p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
        <footer className="footer">
          <p>© 2024 Lifecare Hospital Management System. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
