import React from 'react';

function RestaurantMenu({ menu }) {
  return (
    <div>
      <h2>Menu</h2>
      {menu.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
