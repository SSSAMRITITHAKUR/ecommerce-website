import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product, onAddToCart }) => {
  return (
    <div className="product-details">
      <p className="product-name">{product.name}</p>
      <p className="product-price">
        {product.discountedPrice ? (
          <>
            <span className="original-price">{product.price}</span>
            <span className="discount-price">{product.discountedPrice}</span>
          </>
        ) : (
          product.price
        )}
      </p>
      <button className="add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
