import React, { useState, useContext } from 'react';
import FoodsDrinksContext from '../context/FoodsDrinksContext';

const SearchBarHeader = () => {
  const [searchBar, setSearchBar] = useState('');
  const [filterType, setFilterType] = useState();
  const { handleFilter } = useContext(FoodsDrinksContext);

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        value={ searchBar }
        onChange={ ({ target }) => setSearchBar(target.value) }
      />
      <label htmlFor="ingridient">
        <input
          data-testid="ingredient-search-radio"
          id="ingridient"
          type="radio"
          name="filter"
          value="ingridient"
          onChange={ ({ target }) => setFilterType(target.value) }
        />
        Ingridient
      </label>
      <label htmlFor="name">
        <input
          data-testid="name-search-radio"
          id="name"
          type="radio"
          name="filter"
          value="name"
          onChange={ ({ target }) => setFilterType(target.value) }
        />
        Name
      </label>
      <label htmlFor="firstLetter">
        <input
          data-testid="first-letter-search-radio"
          id="firstLetter"
          type="radio"
          name="filter"
          value="firstLetter"
          onChange={ ({ target }) => setFilterType(target.value) }
        />
        First Letter
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ () => handleFilter(searchBar, filterType) }
      >
        Search
      </button>
    </form>
  );
};

export default SearchBarHeader;
