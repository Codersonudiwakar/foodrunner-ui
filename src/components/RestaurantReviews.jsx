import React from 'react';

function RestaurantReviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.user}</h3>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantReviews;
