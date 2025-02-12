import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // ✅ Now it will work
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product); // ✅ No more errors!
    setAddedToCart(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {addedToCart ? (
        <button onClick={() => navigate("/cart")} className="view-cart-btn">
          View Cart
        </button>
      ) : (
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
