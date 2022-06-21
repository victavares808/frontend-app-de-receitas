import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const FoodsDrinksProvider = ({ children }) => {
  // const [pageType, setPageType] = useState('Foods');
  const [filter, setFilter] = useState({});
  console.log(filter);

  const handleFilter = (searchBar, filterType) => {
    setFilter({
      searchBar,
      filterType,
    });
  };

  const contextValue = {
    handleFilter,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      {children}
    </RecipesContext.Provider>
  );
};

FoodsDrinksProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default FoodsDrinksProvider;
