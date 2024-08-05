import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { myAxios } from '../service/service';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const query = useQuery().get('keyword');

  useEffect(() => {
    if (query) {
      myAxios.get('/search-food-items', {
        params: { keyword: query }
      })
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
    }
  }, [query]);

  return (
    <div className="search-results-container">
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((item) => (
            <li key={item.foodId}>
              <strong>Name:</strong> {item.foodName}, 
              <strong>Category:</strong> {item.foodCategory}, 
              <strong>Restaurant:</strong> {item.foodRestaurant}, 
              <strong>Price:</strong> {item.foodPrice}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
