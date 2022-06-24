import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { fetchTypesOfFoods } from '../services/FetchTypesOfFoods';
import { fetchTypesOfDrinks } from '../services/fetchTypesOfDrinks';

const RecipesList = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [categorysFoods, setCategorysFoods] = useState([]);
  const [categorysDrinks, setCategorysDrinks] = useState([]);
  const [typeCategoryFood, setTypeCategoryFood] = useState('');
  const [typeCategoryDrink, setTypeCategoryDrink] = useState('');
  console.log(typeCategoryFood);
  console.log(typeCategoryDrink);

  const MAX_INDEX = 5;

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

  return (
    <div>
      {pathname === '/foods' && (
        <div>
          {categorysFoods.filter((_category, indexCategory) => indexCategory < MAX_INDEX)
            .map(({ strCategory }, index) => (
              <button
                key={ index }
                data-testid={ `${strCategory}-category-filter` }
                type="button"
                onClick={ ({ target: { value } }) => setTypeCategoryFood(value) }
                value={ strCategory }
              >
                {strCategory}

              </button>))}
        </div>
      )}
      {pathname === '/drinks' && (
        <div>
          {categorysDrinks.filter((_category, indexCategory) => indexCategory < MAX_INDEX)
            .map((category, index) => (
              <button
                key={ index }
                data-testid={ `${category.strCategory}-category-filter` }
                type="button"
                onClick={ ({ target: { value } }) => setTypeCategoryDrink(value) }
                value={ category.strCategory }
              >
                {category.strCategory}

              </button>))}
        </div>
      )}
    </div>

  );
};

export default RecipesList;
