// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FoodCategories from './components/FoodCategories';
import PopularRestaurants from './components/PopularRestaurants';
import Footer from './components/Footer';
import SearchCard from './components/SearchCard';
import MenuCard from './components/MenuCard';

const Home = () => {
    return (
        <>
            <Navbar/>
            <SearchCard/>
            <div className="menu-section">
                <MenuCard/>
            </div>
            <HeroSection />
            <FoodCategories />
            <PopularRestaurants />
            <Footer />
        </>
    );
};

export default Home;
