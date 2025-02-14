import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css"; // Make sure this CSS file exists

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // ✅ Getting product data from location state
  const product = location.state?.product;

  if (!product) {
    return <p>Product not found.</p>; // If no product data, show error
  }

  // ✅ Function to add product to cart & navigate to cart page
  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); // Navigate to cart after adding
  };

  return (
    <div className="product-detail">
      <img src={`/images/${product.image}`} alt={product.name} className="product-detail-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
