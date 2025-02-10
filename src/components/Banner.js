import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <h1>Headline that grabs people's attention</h1>
        <button className="shop-btn">Shop Now</button>
      </div>
      <img src="/pink-compact-powder-with-flower-twig-mirror-makeup-brushes-white-fur-backdrop.jpg" alt="Luxury Skincare" className="banner-image" />
    </div>
  );
};

export default Banner;
