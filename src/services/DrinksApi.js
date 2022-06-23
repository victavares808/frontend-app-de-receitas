export const fetchDrinksByIngridient = async (value) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDrinksByName = async (value) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDrinksByFirstLetter = async (value) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (err) {
    console.log(err);
  }
};
