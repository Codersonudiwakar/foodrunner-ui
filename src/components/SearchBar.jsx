import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { myAxios } from '../service/service';

const FoodSearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      myAxios.get('/foodRunner/search-food-items', {
        params: { keyword: query }
      })
      .then(response => {
        setSuggestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching suggestions:', error);
      });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/foodRunner/search-results?keyword=${query}`);
    }
  };

  const handleSuggestionClick = (keyword) => {
    navigate(`/foodRunner/search-results?keyword=${keyword}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for food..."
        className="search-bar-input"
      />
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion.foodName)}
              style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickable items
            >
              <strong>Name:</strong> {suggestion.foodName}, 
              <strong>Category:</strong> {suggestion.foodCategory}, 
              <strong>Restaurant:</strong> {suggestion.foodRestaurant}, 
              <strong>Price:</strong> {suggestion.foodPrice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodSearchBar;
