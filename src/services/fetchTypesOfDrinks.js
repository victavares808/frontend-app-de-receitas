export const fetchTypesOfDrinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    const MAX_INDEX = 5;
    return (
      drinks.filter((_category, indexCategory) => indexCategory < MAX_INDEX)
    );
  } catch (err) {
    console.log(err);
  }
};

export const fetchByCategorysDrinks = async (value) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
  try {
    const response = await fetch(url);
    const { drinks } = await response.json();
    return drinks;
  } catch (err) {
    console.log(err);
  }
};
