import React, { useState, useEffect } from 'react';

const ProductCard = ({ food }) => {
  const [cart, setCart] = useState({
    quantity: 0,
    foodId: '',
    foodName: '',
    foodCategory: '',
    foodPrice: '',
    foodRestaurant: '',
  });

  useEffect(() => {
    if (food) {
      setCart(prevCart => ({
        ...prevCart,
        foodId: food.foodId,
        foodName: food.foodName,
        foodCategory: food.foodCategory,
        foodPrice: food.foodPrice,
        foodRestaurant: food.foodRestaurant,
      }));
    }
  }, [food]);

  if (!food) {
    console.error("Food data is undefined or null");
    return null;
  }

  console.log("Food data inside ProductCard:", food);

  const increase = () => {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity + 1
    }));
  };

  const decrease = () => {
    setCart(prevCart => ({
      ...prevCart,
      quantity: prevCart.quantity > 0 ? prevCart.quantity - 1 : 0
    }));
  };

  const addToCart = () => {
    const updatedCart = {
      ...cart,
      foodId: food.foodId,
      foodName: food.foodName,
      foodCategory: food.foodCategory,
      foodPrice: food.foodPrice,
      foodRestaurant: food.foodRestaurant,
    };

    // Retrieve existing cart from session storage
    let existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = existingCart.findIndex(item => item.foodId === food.foodId);

    if (existingItemIndex >= 0) {
      // Update the quantity of the existing item
      existingCart[existingItemIndex].quantity += cart.quantity;
    } else {
      // Add the new item to the cart
      existingCart.push(updatedCart);
    }

    // Save the updated cart back to session storage
    sessionStorage.setItem('cart', JSON.stringify(existingCart));

    // Reset quantity in local state after adding to cart
    setCart(prevCart => ({
      ...prevCart,
      quantity: 0,
    }));
  };

  return (
    <div className="product-card">
      <img src="https://example.com/image.jpg" alt={food.foodName} className="product-image" />
      <div className="product-details">
        <h2>{food.foodName} ({food.foodCategory}, {food.foodRestaurant})</h2>
        <div className="price-section">
          <span className="price">{food.foodPrice}</span>
        </div>
      </div>
      <div className="quantity-button">
        <button className="quantity-btn decrease" onClick={decrease}>-</button>
        <span className="quantity-display">{cart.quantity}</span>
        <button className="quantity-btn increase" onClick={increase}>+</button>
      </div>
      <div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
