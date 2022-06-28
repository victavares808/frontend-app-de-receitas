import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetailsComponent from '../components/RecipeDetailsComponent';

const DetailsDrink = () => {
  const [cocktails, setCocktails] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const MAX_INDEX = 6;
    const fectRecommended = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await response.json();
      const filterMeals = meals.filter((_food, idFood) => idFood < MAX_INDEX)
        .map(({ strMeal, strMealThumb, strCategory }) => ({
          name: strMeal,
          img: strMealThumb,
          type: strCategory,
        }));
      return setRecommended(filterMeals);
    };
    fectRecommended();
  }, []);

  useEffect(() => {
    const initialFetch = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await response.json();
      return (setCocktails(drinks[0]));
    };
    initialFetch();
  }, [id]);

  const isKeyValid = (cocktail, key) => {
    const value = cocktail[key];
    return value !== undefined
      && value !== null
      && value.trim() !== '';
  };

  const getTargetKeys = (cocktail, target) => Object.keys(cocktail)
    .filter((key) => key.startsWith(target));

  const buildIngredientObjects = (cocktail, nameKeys, measureKeys) => nameKeys
    .map((keyName, index) => {
      const measure = cocktail[measureKeys[index]];
      const name = cocktail[keyName];
      return { name, measure };
    });

  const getIngredients = (cocktail) => {
    const validNameKeys = getTargetKeys(cocktail, 'strIngredient')
      .filter((key) => isKeyValid(cocktail, key));
    const validMeasureKeys = getTargetKeys(cocktail, 'strMeasure')
      .filter((key) => isKeyValid(cocktail, key));

    return buildIngredientObjects(cocktail, validNameKeys, validMeasureKeys);
  };

  const ingredients = getIngredients(cocktails);

  const { strDrink, strDrinkThumb, strAlcoholic, strInstructions } = cocktails;

  return (
    <RecipeDetailsComponent
      srcImage={ `${strDrinkThumb}/preview` }
      recipeName={ strDrink }
      recipeCategory={ strAlcoholic }
      recipeText={ strInstructions }
      ingredients={ ingredients }
      srcVideo={ null }
      recommended={ recommended }
    />
  );
};

export default DetailsDrink;
