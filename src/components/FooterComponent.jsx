import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import FoodsDrinksContext from '../context/FoodsDrinksContext';

const FooterComponent = () => {
  const history = useHistory();
  const { handlePageType, clearFilter } = useContext(FoodsDrinksContext);

  const redirectToDrinks = () => {
    history.push('/drinks');
    handlePageType('drinks');
    clearFilter();
  };

  const redirectToExplore = () => {
    history.push('/explore');
  };

  const redirectToFoods = () => {
    history.push('/foods');
    handlePageType('foods');
    clearFilter();
  };

  return (
    <div data-testid="footer" style={ { position: 'fixed', bottom: '0px' } }>
      <input
        type="image"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Explorar bebidas"
        onClick={ redirectToDrinks }
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Explorar"
        onClick={ redirectToExplore }
      />
      <input
        type="image"
        data-testid="food-bottom-btn"
        src={ mealIcon }
        alt="Explorar comidas"
        onClick={ redirectToFoods }
      />
    </div>
  );
};

export default FooterComponent;
