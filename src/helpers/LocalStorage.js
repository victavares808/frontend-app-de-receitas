export const mealsToLocalStorage = () => {
  localStorage.setItem('mealsToken', 1);
};

export const cocktailsToLocalStorage = () => {
  localStorage.setItem('cocktailsToken', 1);
};

export const userEmailToLocalStorage = (value) => {
  localStorage.setItem('user', JSON.stringify({ email: value }));
};

// export const infoPlayerToLocalStorage = (player) => {
//   if (JSON.parse(localStorage.getItem('ranking'))) {
//     const ranking = JSON.parse(localStorage.getItem('ranking'));
//     localStorage.setItem('ranking', JSON.stringify([...ranking, player]));
//   } else {
//     localStorage.setItem('ranking', JSON.stringify([player]));
//   }
// };
