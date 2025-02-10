// HighlightedSection.js
import React from "react";
import "./HighlightedSection.css"; // Custom CSS

const HighlightedSection = ({ backgroundImage }) => {
  return (
    <section
      className="highlighted-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="content">
          <h2>What differentiates you from the competition?</h2>
          <p>
            Use this section to talk about it. Don’t forget to talk about the benefits.
          </p>
          <button className="btn btn-primary">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
