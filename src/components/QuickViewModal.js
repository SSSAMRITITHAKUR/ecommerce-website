import React from "react";
import "./QuickViewModal.css";

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-body">
          {/* Left: Product Image */}
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>

          {/* Right: Product Details */}
          <div className="modal-details">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            {/* Product Price */}
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

            {/* Color Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="product-colors">
                <span>Available Colors:</span>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <span 
                      key={index} 
                      className="color-circle" 
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
