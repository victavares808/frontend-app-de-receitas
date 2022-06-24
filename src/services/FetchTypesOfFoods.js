export const fetchTypesOfFoods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (err) {
    console.log(err);
  }
};

export const fetchByCategorysFoods = async (value) => {
  const url = `www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (err) {
    console.log(err);
  }
};
