import React, { useState, useEffect } from 'react';
import PaymentCard from './PaymentsCard';
import Payment from './PaymentsCard';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCartItems(cart);
    console.log("these are the cart items", cart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.foodPrice * item.quantity), 0);
  };

  const saveCartToDatabase = async () => {
    try {
      const response = await fetch('/foodRunner/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
      if (response.ok) {
        console.log('Cart saved successfully');
      } else {
        console.error('Failed to save cart');
      }
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  return (
    <div className="cart-page">
    <div className="cart-left">
    {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src="https://pics.craiyon.com/2023-07-06/5a7629b9ffa24dd089c87b53a690ee89.webp" alt="FOODIMAGE" />
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
          <button onClick={saveCartToDatabase}>Save Cart</button>
        </div>
      )}
    </div>
    <div className="cart-right">
       <Payment/>
    </div>
</div>

  );
};

export default Cart;
