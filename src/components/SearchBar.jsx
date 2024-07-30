import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodSearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      axios.get(`https://api.example.com/foods?q=${query}`)
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

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
        className="search-bar-input"
      />
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item">
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodSearchBar;
