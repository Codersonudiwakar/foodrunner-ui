import React from 'react';
import QuantityButton from './QuantityButton';

const foodData = [
  {
    "foodId": 123,
    "foodName": "Burger",
    "foodCategory": "Fast Food",
    "foodPrice": "$5.99",
    "foodRestaurant": "FoodRunner"
  },

  {
    "foodId": 456,
    "foodName": "Caesar Salad",
    "foodCategory": "Salad",
    "foodPrice": "$7.50",
    "foodRestaurant": "Green Eats"
  },

  {
    "foodId": 789,
    "foodName": "Pepperoni Pizza",
    "foodCategory": "Italian",
    "foodPrice": "$12.99",
    "foodRestaurant": "Pizza Palace"
  },

  {
    "foodId": 101,
    "foodName": "Sushi Roll",
    "foodCategory": "Japanese",
    "foodPrice": "$8.75",
    "foodRestaurant": "Sushi Express"
  },

  {
    "foodId": 202,
    "foodName": "Chicken Tacos",
    "foodCategory": "Mexican",
    "foodPrice": "$6.50",
    "foodRestaurant": "Taco Fiesta"
  }
];


const ProductCard = ({ food }) => (

  
  <div className="product-card">
    <img src="https://example.com/image.jpg" alt={food.name} className="product-image" />
    <div className="product-details">
      <h2>{food.name} ({food.color}, {food.storage})</h2>
      <div className="rating">
        <span className="rating-value">{food.rating}</span>
        <span className="ratings-count">{food.ratingsCount} Ratings & {food.reviewsCount} Reviews</span>
      </div>
      <div className="price-section">
        <span className="price">₹{food.price}</span>
        <span className="original-price">₹{food.originalPrice}</span>
        <span className="discount">{food.discount}% off</span>
      </div>
      <div className="delivery">{food.delivery}</div>
      <div className="exchange-offer">{food.exchangeOffer}</div>

    </div>
    <QuantityButton/>
  </div>
);

const FoodList = () => (
  <div className="food-list">
    {foodData.map((food, index) => (
      <ProductCard key={index} food={food} />
    ))}
  </div>
);

export default FoodList;
