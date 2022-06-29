import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const StartRecipe = ({ id }) => {
  const history = useHistory();
  const { location: { pathname } } = history;
  const receitaComida = pathname.includes('foods');
  const receitaBebida = pathname.includes('drinks');

  const redirect = () => {
    if (receitaComida) {
      history.push(`/foods/${id}/in-progress`);
    }
    if (receitaBebida) {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ { position: 'fixed', bottom: '0px' } }
      onClick={ () => redirect() }
    >
      Start Recipe
    </button>
  );
};

StartRecipe.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default StartRecipe;
