import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetailsComponent from '../components/RecipeDetailsComponent';

const DetailsFood = () => {
  const [foods, setFoods] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const initialFetch = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await response.json();
      return (setFoods(meals[0]));
    };
    initialFetch();
  }, [id]);
  console.log(foods);

  const { strMeal, strMealThumb, strCategory, strInstructions,  } = foods;
  return (
    <RecipeDetailsComponent
      srcImage={ `${strMealThumb}/preview` }
      recipeName={ strMeal }
      recipeCategory={ strCategory }
      recipeText={ strInstructions }
    />
  );
};

export default DetailsFood;
