import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = ({ products }) => {
  return (
    <div className="featured-container">
      <h2 className="section-title">Featured Collection</h2>
      <p className="section-subtitle">
        A powerful headline about your product’s features to give focus to your chosen product collection.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {product.sale && <span className="sale-badge">Sale</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              <button className="quick-view">Quick View</button>
            </div>

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
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
