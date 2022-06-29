import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const StartRecipe = ({ id, page }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/${page}/${id}/in-progress`);
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      style={ { position: 'fixed', bottom: '0px' } }
      onClick={ () => onClick() }
    >
      Start Recipe
    </button>
  );
};

StartRecipe.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default StartRecipe;
