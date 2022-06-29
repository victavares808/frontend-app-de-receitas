import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const StartRecipe = ({ id, page, storage }) => {
  const [inProgress, setInProgress] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getStorage = () => {
      if (JSON.parse(localStorage.getItem('inProgressRecipes'))) {
        const inProgressObj = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const { meals, cocktails } = inProgressObj;
        const verifyKeysMeals = Object.keys(meals).some((key) => key === id);
        const verifyKeysCocktails = Object.keys(cocktails).some((key) => key === id);
        if (page === 'foods') {
          setInProgress(verifyKeysMeals);
        }
        if (page === 'drinks') {
          setInProgress(verifyKeysCocktails);
        }
      }
    };
    getStorage();
  }, [id, page]);

  const onClick = () => {
    history.push(`/${page}/${id}/in-progress`);
    storage();
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ { position: 'fixed', bottom: '0px' } }
      onClick={ () => onClick() }
    >
      {!inProgress ? 'Start Recipe' : 'Continue Recipe'}
    </button>
  );
};

StartRecipe.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default StartRecipe;
