import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodsDrinksContext from './FoodsDrinksContext';
import {
  fetchFoodsByIngridient,
  fetchFoodsByName, fetchFoodsByFirstLetter,
} from '../services/FoodsApi';

const FoodsDrinksProvider = ({ children }) => {
  // const [pageType, setPageType] = useState('Foods');
  const [filter, setFilter] = useState({});
  const [meals, setMeals] = useState({});

  useEffect(() => {
    const fetchApi = async ({ filterType, searchBar }) => {
      if (filterType === 'ingridient') {
        const ingridient = await fetchFoodsByIngridient(searchBar);
        return setMeals(ingridient);
      }
      if (filterType === 'name') {
        const name = await fetchFoodsByName(searchBar);
        return setMeals(name);
      }
      if (filterType === 'firstLetter') {
        const firstLetter = await fetchFoodsByFirstLetter(searchBar);
        return setMeals(firstLetter);
      }
    };
    fetchApi(filter);
  }, [filter]);

  const handleFilter = (searchBar, filterType) => {
    setFilter({
      searchBar,
      filterType,
    });
  };

  const contextValue = {
    filter,
    meals,
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
