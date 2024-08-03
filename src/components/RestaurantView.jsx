import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
import RestaurantReviews from './RestaurantReviews';
import RestaurantMenu from './RestaurantMenu';

function RestaurantView() {


  return (
    <div className='restaurant-view-container'>
      <div className='restaurant-top-section'></div>
      <div className='restaurant-details-section'>
      <div className='restaurant-menu-bar'></div>
      <div className='restaurant-view-home'></div>
      </div>
    
    </div>
  );
}

export default RestaurantView;
