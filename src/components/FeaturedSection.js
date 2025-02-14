import React, { useMemo } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "./FeaturedSection.css";

const FeaturedSection = ({ products = [], onQuickView, onAddToCart }) => {
  const navigate = useNavigate(); // Hook for navigation

  const productList = useMemo(() => products, [products]);

  return (
    <div className="featured-container">
      <h2 className="section-title">Featured Collection</h2>
      <p className="section-subtitle">
        A powerful headline about your product’s features to give focus to your chosen product collection.
      </p>

      {productList.length === 0 ? (
        <p className="no-products">No featured products available.</p>
      ) : (
        <div className="product-grid">
          {productList.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView} 
              onAddToCart={onAddToCart} 
              onClick={() => navigate(`/product/${product.id}`, { state: { product } })} // Navigate to product details
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedSection;
