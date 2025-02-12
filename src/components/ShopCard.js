import React from "react";
import { useCart } from "../context/CartContext"; // Import CartContext
import { useNavigate } from "react-router-dom"; // For navigation
import "./ShopCard.css";

const ShopCard = ({ id, image, title, price }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Navigation hook

  const handleAddToCart = () => {
    addToCart({ id, image, title, price }); // Add item to cart
    navigate("/cart"); // Redirect to Cart Page
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
