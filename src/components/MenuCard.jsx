import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems.json';

const MenuCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(menuItems);
  }, []);

  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <div className="menu-item" key={index}>
          <Link to={`/${item.name}`}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
