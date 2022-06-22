import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
  const [pageType, setPageType] = useState('');
  const [filter, setFilter] = useState({});
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const { location: { pathname } } = history;
    if (pathname === '/foods') {
      setPageType('foods');
    }
    if (pathname === '/drinks') {
      setPageType('drinks');
    }
  }, [history]);

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
  }, [filter, pageType, meals, history]);

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
  }, [filter, pageType, drinks]);

  useEffect(() => {
    if (pageType === 'foods' && !meals) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (meals.length === 1) {
      history.push(`/foods/${meals[0].idMeal}`);
    }
    if (pageType === 'drinks' && !drinks) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (drinks.length === 1) {
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  }, [meals, drinks, pageType, history]);

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
