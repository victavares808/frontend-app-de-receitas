import React from 'react';
import { useHistory } from 'react-router';

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
          <button type="button" data-testid="explore-surprise">Surprise me!</button>
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
          <button type="button" data-testid="explore-surprise">Surprise me!</button>
        </div>
      )}
    </div>
  );
};

export default ExploreByFoodOrDrink;
