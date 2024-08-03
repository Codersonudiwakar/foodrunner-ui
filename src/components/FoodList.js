import React from 'react';
import ProductCard from '../components/ProductCard';

const foodData = [
  {
    foodId: 123,
    foodName: "Burger",
    foodCategory: "Fast Food",
    foodPrice: "5.99",
    foodRestaurant: "FoodRunner"
  },
  {
    foodId: 456,
    foodName: "Caesar Salad",
    foodCategory: "Salad",
    foodPrice: "7.50",
    foodRestaurant: "Green Eats"
  },
  {
    foodId: 789,
    foodName: "Pepperoni Pizza",
    foodCategory: "Italian",
    foodPrice: "12.99",
    foodRestaurant: "Pizza Palace"
  },
  {
    foodId: 101,
    foodName: "Sushi Roll",
    foodCategory: "Japanese",
    foodPrice: "8.75",
    foodRestaurant: "Sushi Express"
  },
  {
    foodId: 202,
    foodName: "Chicken Tacos",
    foodCategory: "Mexican",
    foodPrice: "6.50",
    foodRestaurant: "Taco Fiesta"
  }
];
console.log(foodData);

const FoodList = () => {
  console.log("Food data:", foodData);

  return (
    <div className="food-list">
    {foodData.map((food, index) => (
      <ProductCard key={index} food={food} />
    ))}
  </div>
  );
};

export default FoodList;
