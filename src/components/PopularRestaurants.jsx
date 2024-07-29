// src/components/PopularRestaurants.js
import React from 'react';

const PopularRestaurants = () => {
    const restaurants = [
        { name: 'Restaurant 1', image: '/path/to/restaurant1.jpg' },
        { name: 'Restaurant 2', image: '/path/to/restaurant2.jpg' },
        { name: 'Restaurant 3', image: '/path/to/restaurant3.jpg' },
    ];

    return (
        <section className="restaurant-section">
            <h2>Popular Restaurants</h2>
            <div className="restaurants">
                {restaurants.map((restaurant, index) => (
                    <div className="restaurant-card" key={index}>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <p>{restaurant.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularRestaurants;
