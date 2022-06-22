import React, { useContext } from 'react';
import searchIcon from '../images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';

const SearchBtn = () => {
  const { handleSearch } = useContext(RecipesContext);
  return (
    <input
      type="image"
      data-testid="search-top-btn"
      src={ searchIcon }
      alt="imagem do profile"
      onClick={ () => handleSearch() }
    />
  );
};

export default SearchBtn;
