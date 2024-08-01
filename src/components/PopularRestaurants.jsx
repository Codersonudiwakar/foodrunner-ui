// src/components/PopularRestaurants.js
import React from 'react';

const PopularRestaurants = () => {
    const restaurants = [
        { name: 'Restaurant 1', image: 'https://rishikeshcamps.in/wp-content/uploads/2023/05/restaarant.jpg' },
        { name: 'Restaurant 2', image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Toit1.jpg' },
        { name: 'Restaurant 3', image: 'https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg' },
        { name: 'Restaurant 4', image: 'https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg' },
        { name: 'Restaurant 5', image: 'https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg' },
        
    ];

    return (
        <>
        <h2>Popular Restaurants</h2>
       
        <section className="restaurant-section">
            
            <div className="restaurant-list">
                {restaurants.map((restaurant, index) => (
                    <div className="restaurant-card" key={index}>
                        <img src={restaurant.image} alt={restaurant.name} />
                        <p>{restaurant.name}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
};

export default PopularRestaurants;
