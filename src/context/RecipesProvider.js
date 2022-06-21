import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const RecipesProvider = ({ children }) => {
  const [pageType, setPageType] = useState('Foods');
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  const contextValue = {
    pageType,
    setPageType,
    isSearch,
    handleSearch,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default RecipesProvider;
