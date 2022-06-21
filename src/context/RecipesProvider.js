import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

const RecipesProvider = ({ children }) => {
  const [pageType, setPageType] = useState('Foods');

  const contextValue = {
    pageType,
    setPageType,
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
