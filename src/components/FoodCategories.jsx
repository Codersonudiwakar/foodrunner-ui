// src/components/FoodCategories.js
import React from 'react';
const FoodCategories = () => {
    const categories = [
        { name: 'Pizza', image: '/path/to/pizza.jpg' },
        { name: 'Burger', image: '/path/to/burger.jpg' },
        { name: 'Sushi', image: '/path/to/sushi.jpg' },
    ];

    return (
        <div className="categories">
            {categories.map((category, index) => (
                <div className="category-card" key={index}>
                    <img src={category.image} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    );
};

export default FoodCategories;
