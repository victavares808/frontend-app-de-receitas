import React from 'react';
import { useHistory } from 'react-router';
import { fetchRandomFood, fetchRandomDrink } from '../services/RandomApi';

const ExploreByFoodOrDrink = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectToExploreFoodsIng = () => {
    history.push('/explore/foods/ingredients');
  };

  const redirectToExploreFoodsNat = () => {
    history.push('/explore/foods/nationalities');
  };

  const redirectToExploreDrinksIng = () => {
    history.push('/explore/drinks/ingredients');
  };

  const redirectToRandomFood = async () => {
    const { idMeal } = await fetchRandomFood();
    history.push(`/foods/${idMeal}`);
  };

  const redirectToRandomDrinks = async () => {
    const { idDrink } = await fetchRandomDrink();
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <div>
      { pathname === '/explore/foods' && (
        <div>
          <button
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ redirectToExploreFoodsIng }
          >
            By Ingredient

          </button>
          <button
            type="button"
            data-testid="explore-by-nationality"
            onClick={ redirectToExploreFoodsNat }
          >
            By Nationality
          </button>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ redirectToRandomFood }
          >
            Surprise me!

          </button>
        </div>
      )}

      {pathname === '/explore/drinks' && (
        <div>
          <button
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ redirectToExploreDrinksIng }
          >
            By Ingredient

          </button>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ redirectToRandomDrinks }
          >
            Surprise me!

          </button>
        </div>
      )}
    </div>
  );
};

export default ExploreByFoodOrDrink;
