import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { myAxios } from '../service/service';
import ProductCard from './ProductCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const query = useQuery().get('keyword');

  useEffect(() => {
    if (query) {
      myAxios.get('/foodRunner/search-food-items', {
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
      <div className="food-list">
        {results.length > 0 ? (
          results.map((food, index) => (
            <ProductCard key={index} food={food} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
