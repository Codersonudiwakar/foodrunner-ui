import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import foodsData from './foods.json';

const BestFoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        // Simulate fetching data from JSON
        setFoods(foodsData);
    }, []);

    return (
        <div className="food-list-container">
            <div className="food-list">
                {foods.map((food, index) => (
                    <FoodCard key={index} food={food} />
                ))}
            </div>
        </div>
    );
};

export default BestFoodList;
