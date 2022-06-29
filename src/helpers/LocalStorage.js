export const mealsToLocalStorage = () => {
  localStorage.setItem('mealsToken', 1);
};

export const cocktailsToLocalStorage = () => {
  localStorage.setItem('cocktailsToken', 1);
};

export const userEmailToLocalStorage = (value) => {
  localStorage.setItem('user', JSON.stringify({ email: value }));
};

export const doneRecipe = (recipes) => {
  if (JSON.parse(localStorage.getItem('doneRecipes'))) {
    const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipeStorage, recipes]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([recipes]));
  }
};
