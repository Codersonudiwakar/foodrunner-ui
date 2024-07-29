// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoodCategories from './components/FoodCategories';
import PopularRestaurants from './components/PopularRestaurants';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar/>
            <HeroSection />
            <FoodCategories />
            <PopularRestaurants />
            <Footer />
        </>
    );
};

export default App;
