import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { fetchByCategorysFoods, fetchTypesOfFoods } from '../services/FetchTypesOfFoods';
import { fetchByCategorysDrinks, fetchTypesOfDrinks }
from '../services/fetchTypesOfDrinks';
import CardFoodsOrDrinks from './CardFoodsOrDrinks';
import { fetchInitialFood, fetchInitialDrink } from '../services/FetchInitial';

const RecipesList = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [categorysFoods, setCategorysFoods] = useState([]);
  const [categorysDrinks, setCategorysDrinks] = useState([]);
  const [typeCategoryFood, setTypeCategoryFood] = useState('');
  const [typeCategoryDrink, setTypeCategoryDrink] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  // const [initialFood, setInitalFood] = useState();
  // const [initialDrink, setInitalDrink] = useState();

  console.log(filteredFoods);
  console.log(filteredDrinks);
  // console.log(categorysFoods);

  const MAX_INDEX = 5;
  const MAX_CARDS = 12;

  useEffect(() => {
    const fetchInitialFoods = async () => {
      const data = await fetchInitialFood();
      setFilteredFoods(data);
    };
    fetchInitialFoods();
  }, []);

  useEffect(() => {
    const fetchInitialDrinks = async () => {
      const data1 = await fetchInitialDrink();
      setFilteredDrinks(data1);
    };
    fetchInitialDrinks();
  }, []);

  useEffect(() => {
    const fetchCategorysFoods = async () => {
      const data = await fetchTypesOfFoods();
      setCategorysFoods(data);
    };
    fetchCategorysFoods();
  }, []);

  useEffect(() => {
    const fetchCategorysDrinks = async () => {
      const data = await fetchTypesOfDrinks();
      setCategorysDrinks(data);
    };
    fetchCategorysDrinks();
  }, []);

  useEffect(() => {
    const fetchCategoryFood = async () => {
      if (typeCategoryFood) {
        const data = await fetchByCategorysFoods(typeCategoryFood);
        const filteredData = data
          .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
        setFilteredFoods(filteredData);
      }
    };
    fetchCategoryFood();
  }, [typeCategoryFood]);

  useEffect(() => {
    const fetchCategoryDrinks = async () => {
      if (typeCategoryDrink) {
        const data = await fetchByCategorysDrinks(typeCategoryDrink);
        const filteredData = data
          .filter((_categoryDrink, indexCategoryDrink) => indexCategoryDrink < MAX_CARDS);
        setFilteredDrinks(filteredData);
      }
    };
    fetchCategoryDrinks();
  }, [typeCategoryDrink]);

  const handleCategoryFood = ({ target: { value } }) => {
    setTypeCategoryFood(value);
    // setIsRender(true);
  };

  const handleCategoryDrink = ({ target: { value } }) => {
    setTypeCategoryDrink(value);
    // setIsRender(true);
  };

  const allFoods = async () => {
    const data = await fetchInitialFood('');
    const filteredData = data
      .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
    setFilteredFoods(filteredData);
  };

  const allDrinks = async () => {
    const data = await fetchInitialDrink('');
    const filteredData = data
      .filter((_categoryFood, indexCategoryFood) => indexCategoryFood < MAX_CARDS);
    setFilteredDrinks(filteredData);
  };

  return (
    <div>
      <div>
        {pathname === '/foods' && (
          <div>
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ () => allFoods() }
            >
              All
            </button>
            {categorysFoods
              .map(({ strCategory }, index) => (
                <button
                  key={ index }
                  data-testid={ `${strCategory}-category-filter` }
                  type="button"
                  onClick={ handleCategoryFood }
                  value={ strCategory }
                >
                  {strCategory}

                </button>))}

            {filteredFoods.map(({ strMealThumb, strMeal, idMeal }, index) => (
              <CardFoodsOrDrinks
                key={ index }
                index={ index }
                src={ strMealThumb }
                name={ strMeal }
                idMeal={ idMeal }
              />
            ))}

          </div>
        )}

      </div>
      <div>
        {pathname === '/drinks' && (
          <div>
            <button
              type="button"
              data-testid="All-category-filter"
              onClick={ () => allDrinks() }
            >
              All
            </button>
            {categorysDrinks
              .filter((_category, indexCategory) => indexCategory < MAX_INDEX)
              .map((category, index) => (
                <button
                  key={ index }
                  data-testid={ `${category.strCategory}-category-filter` }
                  type="button"
                  onClick={ handleCategoryDrink }
                  value={ category.strCategory }
                >
                  {category.strCategory}

                </button>))}
            {filteredDrinks.map(({ strDrinkThumb, strDrink, idDrink }, index) => (
              <CardFoodsOrDrinks
                key={ index }
                index={ index }
                src={ strDrinkThumb }
                name={ strDrink }
                idDrink={ idDrink }
              />
            ))}

          </div>
        )}

      </div>
    </div>

  );
};

export default RecipesList;
