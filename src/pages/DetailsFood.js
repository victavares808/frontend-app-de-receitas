import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetailsComponent from '../components/RecipeDetailsComponent';

const DetailsFood = () => {
  const [foods, setFoods] = useState([]);
  // const [ingredientObject, setIngredientObject] = useState({});
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

  const isKeyValid = (food, key) => {
    const value = food[key];
    return value !== undefined
      && value !== null
      && value.trim() !== '';
  };

  const getTargetKeys = (food, target) => Object.keys(food)
    .filter((key) => key.startsWith(target));

  const buildIngredientObjects = (food, nameKeys, measureKeys) => {
    return nameKeys.map((keyName, index) => {
      const measure = food[measureKeys[index]]
      const name = food[keyName]
      return { name, measure }
    })
  };

  const getIngredients = (food) => {
    const validNameKeys = getTargetKeys(food, 'strIngredient')
      .filter((key) => isKeyValid(foods, key));
    const validMeasureKeys = getTargetKeys(food, 'strMeasure')
      .filter((key) => isKeyValid(food, key));

    return buildIngredientObjects(food, validNameKeys, validMeasureKeys);
  };

  const { strMeal, strMealThumb, strCategory, strInstructions } = foods;

  const ingredients = getIngredients(foods);
  // setIngredientObject(foods);

  return (
    <RecipeDetailsComponent
      srcImage={`${strMealThumb}/preview`}
      recipeName={strMeal}
      recipeCategory={strCategory}
      recipeText={strInstructions}
      ingredients={ingredients}
    />
  );
};

export default DetailsFood;
