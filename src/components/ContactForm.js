import React from "react";
import "./ContactForm.css"; // Importing separate CSS file

const ContactForm = ({ details }) => {
  return (
    <div className="contact-container">
      {/* Left Side: Form */}
      <div className="contact-form">
        <h2>Leave Us a Message</h2>
        <form>
          <label>
            Name <span>*</span>
          </label>
          <input type="text" required />

          <label>
            Email <span>*</span>
          </label>
          <input type="email" required />

          <label>
            Comment or Message <span>*</span>
          </label>
          <textarea rows="5" required></textarea>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      {/* Right Side: Store Info */}
      <div className="contact-info">
        <h2>Our Store</h2>
        <p>{details.address}</p>
        <p>
          <strong>PHONE:</strong> {details.phone}
        </p>
        <p>
          <strong>E-MAIL:</strong> {details.email}
        </p>

        <h3>Store Hours</h3>
        {details.hours.map((item, index) => (
          <p key={index}>
            <strong>{item.day}:</strong> {item.time}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
