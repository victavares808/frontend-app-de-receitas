import React, { useContext, useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import RecipesContext from '../context/RecipesContext';
import SearchBarHeader from '../components/SearchBarHeader';
import FoodsDrinksContext from '../context/FoodsDrinksContext';
import CardFoodsOrDrinks from '../components/CardFoodsOrDrinks';
import RecipesList from '../components/RecipesList';
import { fetchByCategorysDrinks, fetchTypesOfDrinks }
from '../services/fetchTypesOfDrinks';
import { fetchInitialDrink } from '../services/FetchInitial';

const Drinks = () => {
  const { isSearch } = useContext(RecipesContext);
  const { drinks } = useContext(FoodsDrinksContext);
  const [isRender, setIsRender] = useState(false);
  const [cocktail, setCocktail] = useState([]);

  const [categorysDrinks, setCategorysDrinks] = useState([]);
  const [typeCategoryDrink, setTypeCategoryDrink] = useState('');
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [toggle, setToggle] = useState(false);

  const MAX_CARDS = 12;

  useEffect(() => {
    const fetchInitialDrinks = async () => {
      const data1 = await fetchInitialDrink();
      setFilteredDrinks(data1);
    };
    fetchInitialDrinks();
  }, []);

  useEffect(() => {
    const fetchCategorysDrinks = async () => {
      const data = await fetchTypesOfDrinks();
      setCategorysDrinks(data);
    };
    fetchCategorysDrinks();
  }, []);

  useEffect(() => {
    const fetchCategoryDrinks = async () => {
      if (toggle) {
        const data = await fetchByCategorysDrinks(typeCategoryDrink);
        const filteredData = data
          .filter((_categoryDrink, indexCategoryDrink) => indexCategoryDrink < MAX_CARDS);
        setFilteredDrinks(filteredData);
      }
      if (!toggle) {
        const data1 = await fetchInitialDrink();
        setFilteredDrinks(data1);
      }
    };
    fetchCategoryDrinks();
  }, [typeCategoryDrink, toggle]);

  useEffect(() => {
    const verifyMeals = () => {
      if (!drinks || drinks.length === 1 || drinks.length === 0) {
        return (
          setIsRender(false),
          setCocktail([])
        );
      }

      const filterDrinks = drinks.filter((_drink, indexDrink) => indexDrink < MAX_CARDS);

      return (
        setCocktail(filterDrinks),
        setIsRender(true)
      );
    };
    verifyMeals();
  }, [drinks]);

  const allDrinks = async () => {
    const data = await fetchInitialDrink('');
    const filteredData = data
      .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
    setFilteredDrinks(filteredData);
  };

  const handleCategoryDrink = (value) => {
    if (typeCategoryDrink === value) {
      return (
        setTypeCategoryDrink(value),
        setToggle(!toggle)
      );
    }
    setTypeCategoryDrink(value);
    setToggle(true);
  };

  return (
    <div>
      <HeaderComponent pageTitle="Drinks" />
      {isSearch && <SearchBarHeader />}
      {!isSearch
      && <RecipesList
        all={ allDrinks }
        category={ categorysDrinks }
        handleCategory={ handleCategoryDrink }
      />}
      {isRender ? cocktail
        .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          <CardFoodsOrDrinks
            key={ index }
            index={ index }
            src={ strDrinkThumb }
            name={ strDrink }
            id={ idDrink }
            page="drinks"
          />))
        : filteredDrinks.map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          <CardFoodsOrDrinks
            key={ `${index}-${strDrink}` }
            index={ index }
            src={ strDrinkThumb }
            name={ strDrink }
            id={ idDrink }
            page="drinks"
          />))}
      <FooterComponent />
    </div>
  );
};

export default Drinks;
