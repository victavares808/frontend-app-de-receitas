import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetailsComponent from '../components/RecipeDetailsComponent';

const DetailsFood = () => {
  const [foods, setFoods] = useState([]);
  const [recommended, setRecommended] = useState([]);
  // const [ingredientObject, setIngredientObject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const MAX_INDEX = 6;
    const fectRecommended = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await response.json();
      const filterDrinks = drinks.filter((_drink, idDrink) => idDrink < MAX_INDEX)
        .map(({ strDrink, strDrinkThumb, strAlcoholic }) => ({
          name: strDrink,
          img: strDrinkThumb,
          type: strAlcoholic,
        }));
      return setRecommended(filterDrinks);
    };
    fectRecommended();
  }, []);

  useEffect(() => {
    const initialFetch = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await response.json();
      return (setFoods(meals[0]));
    };
    initialFetch();
  }, [id]);

  const isKeyValid = (food, key) => {
    const value = food[key];
    return value !== undefined
      && value !== null
      && value.trim() !== '';
  };

  const getTargetKeys = (food, target) => Object.keys(food)
    .filter((key) => key.startsWith(target));

  const buildIngredientObjects = (food, nameKeys, measureKeys) => nameKeys
    .map((keyName, index) => {
      const measure = food[measureKeys[index]];
      const name = food[keyName];
      return { name, measure };
    });

  const getIngredients = (food) => {
    const validNameKeys = getTargetKeys(food, 'strIngredient')
      .filter((key) => isKeyValid(foods, key));
    const validMeasureKeys = getTargetKeys(food, 'strMeasure')
      .filter((key) => isKeyValid(food, key));

    return buildIngredientObjects(food, validNameKeys, validMeasureKeys);
  };

  const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = foods;

  const ingredients = getIngredients(foods);
  // setIngredientObject(foods);

  const replaceStrYoutube = (str) => {
    if (str) {
      return str.replace('watch?v', 'embed/');
    }
  };

  const newStrYoutube = replaceStrYoutube(strYoutube);

  return (
    <RecipeDetailsComponent
      srcImage={ `${strMealThumb}/preview` }
      recipeName={ strMeal }
      recipeCategory={ strCategory }
      recipeText={ strInstructions }
      ingredients={ ingredients }
      srcVideo={ newStrYoutube }
      recommended={ recommended }
    />
  );
};

export default DetailsFood;
