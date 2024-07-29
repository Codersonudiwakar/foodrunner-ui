// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Discover the best food & drinks in your city</h1>
                <input className="search-bar" type="text" placeholder="Search for restaurants, cuisine or a dish" />
            </div>
        </div>
    );
};

export default HeroSection;
