import React from 'react';
import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients }) => (
  <ul>
    {ingredients
      .map((ingredient, index) => (
        <li data-testid={ `${index}-ingredient-step` } key={ index }>
          <input type="checkbox" value={ ingredient } name={ ingredient } />
        </li>))}
  </ul>
);

IngredientsList.propTypes = {
  ingredients: PropTypes.string,
}.isRequired;

export default IngredientsList;
