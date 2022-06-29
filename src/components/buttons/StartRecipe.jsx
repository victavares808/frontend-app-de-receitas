import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function startRecipeFood(id) {
  const inProgressJson = localStorage.getItem('inProgressRecipes');
  if (inProgressJson) {
    const inProgressObj = JSON.parse(inProgressJson);
    const { meals } = inProgressObj;
    inProgressObj.meals = { ...meals, [id]: [] };
  } else {
    const obj = {
      meals: {
        [id]: [],
      },
      cocktails: [],
    };
    const json = JSON.stringify(obj);
    localStorage.setItem('inProgressRecipes', json);
  }
}

function startRecipeDrink(id) {
  const inProgressJson = localStorage.getItem('inProgressRecipes');
  if (inProgressJson) {
    const inProgressObj = JSON.parse(inProgressJson);
    const { cocktails } = inProgressObj;
    inProgressObj.cocktails = { ...cocktails, [id]: [] };
  } else {
    const obj = {
      cocktails: {
        [id]: [],
      },
      meals: [],
    };
    const json = JSON.stringify(obj);
    localStorage.setItem('inProgressRecipes', json);
  }
}

function StartRecipe({ recipeIsDone, id, page }) {
  const [inProgress, setInProgress] = useState(false);

  function inProgressRecipes() {
    const inProgressJson = localStorage.getItem('inProgressRecipes');
    if (inProgressJson) {
      const inProgressObj = JSON.parse(inProgressJson);
      if (inProgressObj.meals[id] || inProgressObj.cocktails[id]) {
        setInProgress(true);
      }
    }
  }

  useEffect(() => {
    inProgressRecipes();
  }, []);

  return (
    <div>
      {
        !recipeIsDone && (
          <button
            className="btn-start-recipe"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => {
              if (page === 'meals') {
                startRecipeFood(id);
              } else {
                startRecipeDrink(id);
              }
            } }
          >
            {
              !inProgress ? 'Start recipe' : 'Continue Recipe'
            }
          </button>
        )
      }
    </div>
  );
}

StartRecipe.propTypes = {
  recipeIsDone: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default StartRecipe;
