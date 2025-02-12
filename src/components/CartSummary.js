import React from "react";


const CartSummary = ({ totalPrice, setShowModal }) => {
  return (
    <div className="cart-summary">
      <input type="text" className="form-control coupon-input" placeholder="Coupon code" />
      <button className="btn btn-dark apply-coupon">Apply Coupon</button>
      <button className="btn btn-secondary update-cart">Update Cart</button>
      <div className="cart-totals">
        <h4>Cart totals</h4>
        <p>
          Subtotal: <span>${totalPrice}</span>
        </p>
        <p>
          Total: <span>${totalPrice}</span>
        </p>
        <button className="btn btn-dark checkout-btn" onClick={() => setShowModal(true)}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
