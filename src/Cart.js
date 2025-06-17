import React from 'react';
import './Cart.css';

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart__item">
              <img src={item.image} alt={item.name} />
              <div className="cart__info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
          <button className="checkoutBtn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
