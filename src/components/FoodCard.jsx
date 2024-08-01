import React from 'react';

const FoodCard = ({ food }) => {
    return (
        <div className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h3>{food.name}</h3>
        </div>
    );
};

export default FoodCard;
