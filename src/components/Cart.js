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
              <img src="https://pics.craiyon.com/2023-07-06/5a7629b9ffa24dd089c87b53a690ee89.webp" alt="FOODIMAGE"></img>
              <h2>{item.foodName}</h2>
              {/* <p>Category: {item.foodCategory}</p>
              <p>Restaurant: {item.foodRestaurant}</p> */}
              <p>Price: {item.foodPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: {(parseFloat(item.foodPrice) * item.quantity).toFixed(2)}</p>
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
