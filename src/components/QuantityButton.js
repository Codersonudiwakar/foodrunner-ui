import React, { useState } from 'react';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return (
    <div className="quantity-button">
      <button className="quantity-btn decrease" onClick={decrease}>-</button>
      <span className="quantity-display">{quantity}</span>
      <button className="quantity-btn increase" onClick={increase}>+</button>
    </div>
  );
};

export default QuantityButton;