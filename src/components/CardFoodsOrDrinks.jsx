import React, { useState, set } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const CardFoodsOrDrinks = ({ index, src, name, idMeal, idDrink }) => {
  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <div>
      {pathname === '/foods' && (
        <button
          data-testid={ `${index}-recipe-card` }
          type="button"
          onClick={ () => history.push(`/foods/${idMeal}`) }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ src }
            alt="imagem da receita"
            width="50px"
          />
          <span data-testid={ `${index}-card-name` }>{name}</span>
        </button>
      )}
      {pathname === '/drinks' && (
        <button
          data-testid={ `${index}-recipe-card` }
          type="button"
          onClick={ () => history.push(`/drinks/${idDrink}`) }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ src }
            alt="imagem da receita"
            width="50px"
          />
          <span data-testid={ `${index}-card-name` }>{name}</span>
        </button>
      )}

    </div>
  );
};

CardFoodsOrDrinks.propTypes = {
  index: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardFoodsOrDrinks;
