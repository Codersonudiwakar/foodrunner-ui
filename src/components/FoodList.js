import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { myAxios } from '../service/service';

const FoodList = ({ searchKeyword }) => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    if (searchKeyword) {
      myAxios.get(`/foodRunner/category/${searchKeyword}`)
        .then(response => {
          setFoodData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [searchKeyword]);
  console.log(foodData);

  return (
    <div className="food-list">
      {foodData.map((food, index) => (
        <ProductCard key={index} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
