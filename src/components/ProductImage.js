import React from "react";
import "./ProductImage.css";

const ProductImage = ({ product, onQuickView }) => {
  return (
    <div className="image-container">
      {product.sale && <span className="sale-badge">Sale</span>}
      <img src={product.image} alt={product.name} className="product-image" />
      <button className="quick-view" onClick={() => onQuickView(product)}>Quick View</button>
    </div>
  );
};

export default ProductImage;
