import React, { useContext, useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import SearchBarHeader from '../components/SearchBarHeader';
import RecipesContext from '../context/RecipesContext';
import FoodsDrinksContext from '../context/FoodsDrinksContext';
import CardFoodsOrDrinks from '../components/CardFoodsOrDrinks';
import RecipesList from '../components/RecipesList';

const Foods = () => {
  const { isSearch } = useContext(RecipesContext);
  const { meals } = useContext(FoodsDrinksContext);
  const [isRender, setIsRender] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const verifyMeals = () => {
      if (!meals || meals.length === 1) {
        return (
          setIsRender(false),
          setFoods([])
        );
      }

      const MAX_INDEX = 11;
      const filterMeals = meals.filter((_meal, indexMeal) => indexMeal <= MAX_INDEX);

      return (
        setFoods(filterMeals),
        setIsRender(true)
      );
    };
    verifyMeals();
  }, [meals]);

  return (
    <div>
      <HeaderComponent pageTitle="Foods" />
      {isSearch ? <SearchBarHeader /> : <RecipesList />}
      { isRender && foods
        .map(({ strMeal, strMealThumb, idMeal }, index) => (
          <CardFoodsOrDrinks
            key={ index }
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
