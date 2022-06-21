import React from 'react';
import searchIcon from '../images/searchIcon.svg';

const SearchBtn = () => (
  <button
    type="button"
    data-testid="search-top-btn"
    src={ searchIcon }
    alt="imagem do profile"
  />
);

export default SearchBtn;
