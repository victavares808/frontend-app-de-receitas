const MAX_VALUE = 12;

export const fetchAllNationalities = async () => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (err) {
    console.log(err);
  }
};

export const fetchByArea = async (value) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals.filter((_meal, index) => (index < MAX_VALUE));
  } catch (err) {
    console.log(err);
  }
};
