export const fetchFoodIng = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.meals);
    return data.meals;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDrinkIng = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.drinks);
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
};
