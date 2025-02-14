import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);

  // ✅ Navigate to Product Detail Page
  const handleProductClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  // ✅ Add to Cart Functionality
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents triggering the navigation when clicking "Add to Cart"
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <div className="product-card" onClick={handleProductClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {addedToCart ? (
        <button onClick={(e) => { e.stopPropagation(); navigate("/cart"); }} className="view-cart-btn">
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
