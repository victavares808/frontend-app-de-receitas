import React, { useContext, useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import SearchBarHeader from '../components/SearchBarHeader';
import RecipesContext from '../context/RecipesContext';
import FoodsDrinksContext from '../context/FoodsDrinksContext';
import CardFoodsOrDrinks from '../components/CardFoodsOrDrinks';
import RecipesList from '../components/RecipesList';
import { fetchInitialFood } from '../services/FetchInitial';
import { fetchByCategorysFoods, fetchTypesOfFoods } from '../services/FetchTypesOfFoods';

const Foods = () => {
  const { isSearch } = useContext(RecipesContext);
  const { meals } = useContext(FoodsDrinksContext);
  const [isRender, setIsRender] = useState(false);
  const [foods, setFoods] = useState([]);
  const [categorysFoods, setCategorysFoods] = useState([]);
  const [typeCategoryFood, setTypeCategoryFood] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [toggle, setToggle] = useState(false);

  const MAX_CARDS = 12;

  useEffect(() => {
    const fetchInitialFoods = async () => {
      const data = await fetchInitialFood();
      setFilteredFoods(data);
    };
    fetchInitialFoods();
  }, []);

  useEffect(() => {
    const fetchCategorysFoods = async () => {
      const data = await fetchTypesOfFoods();
      setCategorysFoods(data);
    };
    fetchCategorysFoods();
  }, []);

  useEffect(() => {
    const fetchCategoryFood = async () => {
      if (toggle) {
        const data = await fetchByCategorysFoods(typeCategoryFood);
        const filteredData = data
          .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
        setFilteredFoods(filteredData);
      }
      if (!toggle) {
        const data = await fetchInitialFood();
        setFilteredFoods(data);
      }
    };
    fetchCategoryFood();
  }, [typeCategoryFood, toggle]);

  useEffect(() => {
    const verifyMeals = () => {
      if (!meals || meals.length === 1 || meals.length === 0) {
        return (
          setIsRender(false),
          setFoods([])
        );
      }

      const filterMeals = meals.filter((_meal, indexMeal) => indexMeal < MAX_CARDS);

      return (
        setFoods(filterMeals),
        setIsRender(true)
      );
    };
    verifyMeals();
  }, [meals]);

  const allFoods = async () => {
    const data = await fetchInitialFood('');
    const filteredData = data
      .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
    setFilteredFoods(filteredData);
  };

  const handleCategoryFood = (value) => {
    if (typeCategoryFood === value) {
      return (
        setTypeCategoryFood(value),
        setToggle(!toggle)
      );
    }
    setTypeCategoryFood(value);
    setToggle(true);
  };

  return (
    <div>
      <HeaderComponent pageTitle="Foods" />
      {isSearch && <SearchBarHeader />}
      {!isSearch
      && <RecipesList
        all={ allFoods }
        category={ categorysFoods }
        handleCategory={ handleCategoryFood }
      /> }
      { isRender ? foods
        .map(({ strMeal, strMealThumb, idMeal }, index) => (
          <CardFoodsOrDrinks
            key={ index }
            index={ index }
            src={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
            page="foods"
          />))
        : filteredFoods.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <CardFoodsOrDrinks
            key={ `${index}-${strMeal}` }
            index={ index }
            src={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
            page="foods"
          />))}
      <FooterComponent />
    </div>
  );
};

export default Foods;
