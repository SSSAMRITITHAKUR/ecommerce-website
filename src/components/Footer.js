import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome Icons Import

const Footer = ({ brandName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Left Section - Brand Name + Description */}
          <div className="col-md-4">
            <h3 className="footer-brand">{brandName}</h3>
            <p>Give your customers insight into your product collection.</p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="col-md-4 quick-links">
            <h4>Quick links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>

          {/* Right Section - About */}
          <div className="col-md-4">
            <h4>About</h4>
            <ul className="footer-links">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright + Social Media */}
        <div className="footer-bottom">
          <p>© 2025 {brandName}. Proudly powered by {brandName}</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
