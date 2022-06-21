import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodsDrinksContext from './FoodsDrinksContext';

const FoodsDrinksProvider = ({ children }) => {
  // const [pageType, setPageType] = useState('Foods');
  const [filter, setFilter] = useState({});

  const handleFilter = (searchBar, filterType) => {
    setFilter({
      searchBar,
      filterType,
    });
  };

  const contextValue = {
    filter,
    handleFilter,
  };

  return (
    <FoodsDrinksContext.Provider value={ contextValue }>
      {children}
    </FoodsDrinksContext.Provider>
  );
};

FoodsDrinksProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default FoodsDrinksProvider;
