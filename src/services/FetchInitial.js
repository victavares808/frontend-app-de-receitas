const MAX_VALUE = 12;

export const fetchInitialFood = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals.filter((_meal, index) => (index < MAX_VALUE));
  } catch (err) {
    console.log(err);
  }
};

export const fetchInitialDrink = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();

    return drinks.filter((_drinks, index) => index < MAX_VALUE);
  } catch (err) {
    console.log(err);
  }
};
