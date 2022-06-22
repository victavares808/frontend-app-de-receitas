export const fetchRandomFood = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.meals[0];
  } catch (err) {
    console.log(err);
  }
};

export const fetchRandomDrink = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks[0];
  } catch (err) {
    console.log(err);
  }
};
