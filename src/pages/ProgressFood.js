import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FinishRecipe from '../components/buttons/FinishRecipe';
import NoFavoriteButton from '../components/buttons/NoFavoriteButton';
import ShareIcon from '../components/buttons/ShareIcon';

const ProgressFood = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  // const [drinkDetails, setDrinkDetails] = useState('');
  const urlCompleta = window.location.href;
  // window.location.href returns the href (URL) of the current page.
  const receitaComida = urlCompleta.includes('foods');
  const receitaBebida = urlCompleta.includes('drinks');
  const idRecipe = useParams();
  // Aula Thalles, função do trybetunes.

  const fetchFoodDetail = useCallback(async () => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const { meals } = await fetch(`${URL}${idRecipe.id}`)
      .then((response) => response.json());
    setRecipeDetails(meals[0]);
  }, [idRecipe]);

  const fetchDrinkdDetail = useCallback(async () => {
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const { drinks } = await fetch(`${URL}${idRecipe.id}`)
      .then((response) => response.json());
    setRecipeDetails(drinks[0]);
  }, [idRecipe]);

  useEffect(() => {
    if (receitaComida) {
      fetchFoodDetail();
    }
    if (receitaBebida) {
      fetchDrinkdDetail();
    }
  }, [receitaComida, receitaBebida, fetchFoodDetail, fetchDrinkdDetail]);

  const ingredients = [];
  const MAX_INGREDIENT = 20;

  for (let i = 1; i <= MAX_INGREDIENT && recipeDetails; i += 1) {
    if (recipeDetails[`strIngredient${i}`]) {
      ingredients.push(
        `- ${recipeDetails[`strIngredient${i}`]} 
        - ${recipeDetails[`strMeasure${i}`]}`,
      );
    }
  }

  return (
    <div>
      {recipeDetails && (
        <div>
          <img
            data-testid="recipe-photo"
            alt="imagem da receita"
            src={ receitaComida
              ? recipeDetails.strMealThumb
              : recipeDetails.strDrinkThumb }
            width="80px"
          />
          <h2 data-testid="recipe-title">
            {receitaComida ? recipeDetails.strMeal : recipeDetails.srtDrink}
          </h2>
          <h4 data-testid="recipe-category">
            { receitaComida ? recipeDetails.strCategory : recipeDetails.strAlcoholic }
          </h4>
          <NoFavoriteButton />
          <ShareIcon />
          <h3>Ingredients</h3>
          {ingredients.map((ingredient) => (
            <div
              data-testid={ `${ingredients.indexOf(ingredient)}-ingredient-step` }
              key={ ingredients.indexOf(ingredient) }
            >
              <input type="checkbox" value={ ingredient } id={ ingredient } />
              <label htmlFor={ ingredient }>
                { ingredient }
              </label>
            </div>
          ))}
          <h3>Instructions</h3>
          <textarea data-testid="instructions">
            { recipeDetails.strInstructions }
          </textarea>
          <FinishRecipe />
        </div>
      )}

    </div>
  );
};

export default ProgressFood;
