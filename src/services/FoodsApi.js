export const fetchFoodsByIngridient = async (value) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFoodsByName = async (value) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFoodsByFirstLetter = async (value) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  try {
    if (value.length === 1) {
      const response = await fetch(url);
      const { meals } = await response.json();
      return meals;
    }
    return global.alert('Your search must have only 1 (one) character');
  } catch (err) {
    console.log(err);
  }
};
