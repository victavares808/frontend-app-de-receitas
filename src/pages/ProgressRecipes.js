import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/buttons/FavoriteButton';
// import FinishRecipe from '../components/buttons/FinishRecipe';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ProgressRecipes = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const history = useHistory();
  const { location: { pathname } } = history;
  // const [drinkDetails, setDrinkDetails] = useState('');
  const urlCompleta = window.location.href;
  const receitaComida = pathname.includes('foods');
  const receitaBebida = pathname.includes('drinks');
  const idRecipe = useParams();
  // Aula Thalles, função do trybetunes.
  // console.log(pathname);
  const [hasCopy, setHasCopy] = useState(false);

  const fetchFoodDetail = useCallback(async () => {
    const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe.id}`)
      .then((response) => response.json());
    setRecipeDetails(meals[0]);
  }, [idRecipe]);

  const fetchDrinkdDetail = useCallback(async () => {
    const { drinks } = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe.id}`)
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

  const copyToClipBoard = () => {
    copy(urlCompleta);
    // console.log(url);
    global.alert('Link copied!');
    setHasCopy(true);
  };

  return (

    <div>
      {hasCopy && <p>Link copied!</p>}
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
          <FavoriteButton />
          <input
            type="image"
            data-testid="share-btn"
            src={ shareIcon }
            alt="Botão de favoritar"
            onClick={ () => copyToClipBoard() }
          />
          <h3>Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div
              data-testid={ `${index}-ingredient-step` }
              key={ index }
            >
              <input
                type="checkbox"
                value={ ingredient }
                id={ ingredient }
                className="checkbox"
              />
              <label htmlFor={ ingredient }>
                { ingredient }
              </label>
            </div>
          ))}
          <h3>Instructions</h3>
          <p data-testid="instructions">
            { recipeDetails.strInstructions }
          </p>
          <button
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ () => history.push('/done-recipes') }
            disabled={ disable }

          >
            Finish Recipe

          </button>
        </div>
      )}

    </div>
  );
};

export default ProgressRecipes;
