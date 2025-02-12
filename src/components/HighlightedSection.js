import React from "react";
import Button from "./Button"; // ✅ Import Button
import "./HighlightedSection.css"; // ✅ Import CSS

const HighlightedSection = ({ title, description, backgroundImage, buttonText, buttonLink }) => {
  return (
    <section
      className="highlighted-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Button text={buttonText} link={buttonLink} /> {/* ✅ Using the button component */}
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
