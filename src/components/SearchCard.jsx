import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import backgroundImage from '../components/searchCard.jpeg';
import SearchBar from './SearchBar';
import { useState } from 'react';
import FoodSearchBar from './SearchBar';
import MenuCard from './MenuCard';



const SearchCard=()=> {

  return (
    <div className='Search-Card'>
       <div> <h2>Discover the best food & drinks you want to take</h2></div>
       <div className='food-search'><FoodSearchBar/> </div>
    </div>
  );
}

export default SearchCard;