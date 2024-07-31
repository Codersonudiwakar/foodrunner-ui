// src/components/FoodCategories.js
import React from 'react';
const FoodCategories = () => {
    const categories = [
        { name: 'Pizza', image: 'https://5.imimg.com/data5/VO/LB/GLADMIN-40426501/ifc-special-burger.png' },
        { name: 'Burger', image: 'https://5.imimg.com/data5/VO/LB/GLADMIN-40426501/ifc-special-burger.png' },
        { name: 'Sushi', image: 'https://5.imimg.com/data5/VO/LB/GLADMIN-40426501/ifc-special-burger.png' },
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
