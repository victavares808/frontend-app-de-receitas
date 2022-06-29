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
  if (localStorage.getItem('doneRecipes')) {
    const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipeStorage, recipes]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([recipes]));
  }
};

export const inProgressRecipes = (id, listIngredient, type) => {
  if (localStorage.getItem('inProgressRecipes')) {
    const inProgressObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const { meals, cocktails } = inProgressObj;
    if (type === 'foods') {
      inProgressObj.meals = { ...meals, [id]: listIngredient };
    }
    if (type === 'drinks') {
      inProgressObj.cocktails = { ...cocktails, [id]: listIngredient };
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
  } else {
    if (type === 'foods') {
      const obj = {
        cocktails: {},
        meals: {
          [id]: listIngredient,
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
    if (type === 'drinks') {
      const obj = {
        cocktails: {
          [id]: listIngredient,
        },
        meals: {},
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    }
  }
};

export const favoriteRecipe = (recipes) => {
  if (localStorage.getItem('favoriteRecipes')) {
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    localStorage.setItem('favoriteRecipes', JSON.stringify([...favorite, recipes]));
  } else {
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipes]));
  }
};
