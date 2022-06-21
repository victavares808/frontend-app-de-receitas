import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const RecipesProvider = ({ children }) => {
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  const contextValue = {
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
