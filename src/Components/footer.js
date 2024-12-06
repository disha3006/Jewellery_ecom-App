import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
       <footer className="footer" id="connect">
        
        <div className="footer-section">
          <h3>Help And Information</h3>
          <ul>
            <li><a href="#help">Help</a></li>
            <li><a href="#faqs">FAQ's</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#track-order">Track Order</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Want to stay updated with our newest products? Sign up now!</p>
          <form>
            <input type="email" placeholder="email address" />
            <button type="submit">→</button>
          </form>
        </div>
      </footer>
      </div>
       );
    };
    
    export default Footer;