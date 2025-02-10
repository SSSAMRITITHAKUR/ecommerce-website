import React from "react";
import "./ShopCard.css";

const ShopCard = ({ image, title, price }) => {
  return (
    <div className="shop-card">
      <img src={image} alt={title} />
      <div className="shop-card-body">
        <h5>{title}</h5>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
