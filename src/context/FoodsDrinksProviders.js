import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodsDrinksContext from './FoodsDrinksContext';
import {
  fetchFoodsByIngridient,
  fetchFoodsByName, fetchFoodsByFirstLetter,
} from '../services/FoodsApi';
import {
  fetchDrinksByIngridient,
  fetchDrinksByName,
  fetchDrinksByFirstLetter,
} from '../services/DrinksApi';

const FoodsDrinksProvider = ({ children }) => {
  const [pageType, setPageType] = useState('foods');
  const [filter, setFilter] = useState({});
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchApi = async ({ filterType, searchBar }) => {
      if (pageType === 'foods' && filterType === 'ingridient') {
        const ingridient = await fetchFoodsByIngridient(searchBar);
        return (
          setMeals(ingridient),
          setFilter({})
        );
      }
      if (pageType === 'foods' && filterType === 'name') {
        const name = await fetchFoodsByName(searchBar);
        return (
          setMeals(name),
          setFilter({})
        );
      }
      if (pageType === 'foods' && filterType === 'firstLetter') {
        const firstLetter = await fetchFoodsByFirstLetter(searchBar);
        return (
          setMeals(firstLetter),
          setFilter({}));
      }
    };
    fetchApi(filter);
  }, [filter, pageType]);

  useEffect(() => {
    const fetchApi = async ({ filterType, searchBar }) => {
      if (pageType === 'drinks' && filterType === 'ingridient') {
        const ingridient = await fetchDrinksByIngridient(searchBar);
        return (
          setDrinks(ingridient),
          setFilter({})
        );
      }
      if (pageType === 'drinks' && filterType === 'name') {
        const name = await fetchDrinksByName(searchBar);
        return (
          setDrinks(name),
          setFilter({})
        );
      }
      if (pageType === 'drinks' && filterType === 'firstLetter') {
        const firstLetter = await fetchDrinksByFirstLetter(searchBar);
        return (
          setDrinks(firstLetter),
          setFilter({})
        );
      }
    };
    fetchApi(filter);
  }, [filter, pageType]);

  const handleFilter = (searchBar, filterType) => {
    setFilter({
      searchBar,
      filterType,
    });
  };

  const handlePageType = (value) => {
    setPageType(value);
  };

  const contextValue = {
    filter,
    meals,
    drinks,
    pageType,
    handleFilter,
    handlePageType,
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
