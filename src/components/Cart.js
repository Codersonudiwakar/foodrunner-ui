import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(cart);
    console.log("these are the cart item"+cart)
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.foodPrice * item.quantity), 0);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <h2>{item.foodName}</h2>
              <p>Category: {item.foodCategory}</p>
              <p>Restaurant: {item.foodRestaurant}</p>
              <p>Price: {item.foodPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: {item.foodPrice * item.quantity}</p>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: {calculateTotal()}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
