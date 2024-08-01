// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import FoodCategories from './components/FoodCategories';
import PopularRestaurants from './components/PopularRestaurants';
import Footer from './components/Footer';
import SearchCard from './components/SearchCard';
import MenuCard from './components/MenuCard';
import LoginPage from './components/Login';
import { useState } from 'react';
import BestFoodList from './components/BestFoodList';

const Home = () => {
    return (
        <>
            <SearchCard/>
            <div className="menu-section">
                <MenuCard/>
            </div>
            <FoodCategories />
            <BestFoodList/>
            <PopularRestaurants />
            <Footer />
        </>
    );
};

export default Home;
