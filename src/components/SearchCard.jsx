import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import backgroundImage from '../components/searchCard.jpeg';
import SearchBar from './SearchBar';
import { useState } from 'react';
import FoodSearchBar from './SearchBar';



const SearchCard=()=> {

  return (
    <div className='Search-Card'>
       <div> <h2>Sonu kumar diwakar</h2></div>
       <div><FoodSearchBar/> </div>

    </div>
  );
}

export default SearchCard;