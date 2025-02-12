import React from "react";


const CartTable = ({ cartItems, updateCartItemQuantity, removeCartItem }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          const price = parseFloat(item.price) || 0;
          const quantity = item.quantity || 1;

          return (
            <tr key={item.id}>
              <td className="cart-product">
                <img src={item.image} alt={item.name} className="cart-img" />
                {item.name}
              </td>
              <td>${price.toFixed(2)}</td>
              <td>
                <button className="quantity-btn" onClick={() => {
                  if (quantity > 1) {
                    updateCartItemQuantity(item.id, quantity - 1);
                  } else {
                    removeCartItem(item.id);
                  }
                }}>-</button>
                <span className="quantity">{quantity}</span>
                <button className="quantity-btn" onClick={() => updateCartItemQuantity(item.id, quantity + 1)}>+</button>
              </td>
              <td>${(price * quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeCartItem(item.id)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;
