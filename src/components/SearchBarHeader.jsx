import React, { useState, useContext } from 'react';
import FoodsDrinksContext from '../context/FoodsDrinksContext';

const SearchBarHeader = () => {
  const [searchBar, setSearchBar] = useState('');
  const [filterType, setIngridient] = useState();
  const { handleFilter } = useContext(FoodsDrinksContext);

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        value={ searchBar }
        onChange={ ({ target }) => setSearchBar(target.value) }
      />
      <input
        data-testid="ingredient-search-radio"
        type="radio"
        name="filter"
        value="ingridient"
        onChange={ ({ target }) => setIngridient(target.value) }
      />
      <input
        data-testid="name-search-radio"
        type="radio"
        name="filter"
        value="name"
        onChange={ ({ target }) => setIngridient(target.value) }
      />
      <input
        data-testid="first-letter-search-radio"
        type="radio"
        name="filter"
        value="firstLetter"
        onChange={ ({ target }) => setIngridient(target.value) }
      />
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
