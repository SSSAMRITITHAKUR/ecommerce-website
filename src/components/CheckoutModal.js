import React from "react";


const CheckoutModal = ({ cartItems, totalPrice, setShowModal }) => {
  return (
    <div className="checkout-modal">
      <div className="modal-content">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${parseFloat(item.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <h4>Total: ${totalPrice}</h4>
        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
