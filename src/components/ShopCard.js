import React from "react";
import { useCart } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import "./ShopCard.css";

const ShopCard = ({ id, image, title, price }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const handleAddToCart = (e) => {
    e.stopPropagation(); // ✅ Prevent navigation on button click
    addToCart({ id, image, title, price }); 
    navigate("/cart"); 
  };

  return (
    <div className="shop-card">
      <img src={image} alt={title} />
      <div className="shop-card-body">
        <h5>{title}</h5>
        <p>${price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
