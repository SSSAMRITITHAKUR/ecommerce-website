


import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartTable from "../components/CartTable";  // ✅ Corrected path
import CartSummary from "../components/CartSummary";  // ✅ Corrected path
import CheckoutModal from "../components/CheckoutModal";  // ✅ Corrected path
import "./CartPage.css"

const CartPage = () => {
  const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();
  const [showModal, setShowModal] = useState(false);

  // ✅ Calculate total price dynamically
  const totalPrice = cartItems
    .reduce((acc, item) => acc + (parseFloat(item.price) || 0) * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div className="container cart-page">
      <h2 className="text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {/* ✅ Cart Table */}
          <CartTable
            cartItems={cartItems}
            updateCartItemQuantity={updateCartItemQuantity}
            removeCartItem={removeCartItem}
          />

          {/* ✅ Cart Summary */}
          <CartSummary totalPrice={totalPrice} setShowModal={setShowModal} />
        </div>
      )}

      {/* ✅ Checkout Modal */}
      {showModal && <CheckoutModal cartItems={cartItems} totalPrice={totalPrice} setShowModal={setShowModal} />}
    </div>
  );
};

export default CartPage;
