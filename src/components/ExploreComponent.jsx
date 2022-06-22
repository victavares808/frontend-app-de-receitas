import React from 'react';
import { useHistory } from 'react-router';

const ExploreComponent = () => {
  const history = useHistory();

  const redirectToExploreFoods = () => {
    history.push('/explore/foods');
  };

  const redirectToExploreDrinks = () => {
    history.push('/explore/drinks');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ redirectToExploreFoods }
      >
        Explore Foods

      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ redirectToExploreDrinks }
      >
        Explore Drinks

      </button>
    </div>
  );
};

export default ExploreComponent;
