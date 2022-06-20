export const mealsToLocalStorage = () => {
  localStorage.setItem('mealsToken', 1);
};

export const cocktailsToLocalStorage = () => {
  localStorage.setItem('cocktailsToken', 1);
};

export const userEmailToLocalStorage = (value) => {
  localStorage.setItem('user', JSON.stringify({ email: value }));
};
