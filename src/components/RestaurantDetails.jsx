import React from 'react';

function RestaurantDetails({ details }) {
  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.address}</p>
      <p>{details.phone}</p>
      <p>{details.cuisine}</p>
      <p>{details.timings}</p>
    </div>
  );
}

export default RestaurantDetails;
