import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails';
import RestaurantReviews from './RestaurantReviews';
import RestaurantMenu from './RestaurantMenu';

function RestaurantView() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await axios.get('/restaurants.json');
      const restaurants = response.data;
      const restaurant = restaurants.find(r => r.id === parseInt(id));
      setRestaurant(restaurant);
    };

    fetchRestaurant();
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RestaurantDetails details={restaurant.details} />
      <RestaurantMenu menu={restaurant.menu} />
      <RestaurantReviews reviews={restaurant.reviews} />
    </div>
  );
}

export default RestaurantView;
