export const fetchDrinksByIngridient = async (value) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    console.log(drinks);
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
    if (value.length === 1) {
      const response = await fetch(url);
      const { drinks } = await response.json();
      return drinks;
    }
    return global.alert('Your search must have only 1 (one) character');
  } catch (err) {
    console.log(err);
  }
};
