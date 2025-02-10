import React from "react";
import ContactForm from "../components/ContactForm";
import "../components/Contact.css";  // If it's in components
 // Importing separate CSS file

const Contact = () => {
  const contactDetails = {
    address: "501-521 Fashion Ave, New York, NY 10018, USA",
    phone: "+1 212 244 2681",
    email: "office@example.org",
    hours: [
      { day: "Sun", time: "Closed" },
      { day: "Mon to Sat", time: "10 AM – 5:30 PM" },
    ],
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact</h1>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form and Store Details */}
      <ContactForm details={contactDetails} />
    </div>
  );
};

export default Contact;
