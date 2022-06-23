import React from 'react';
import PropTypes from 'prop-types';

const CardFoodsOrDrinks = ({ index, src, name }) => (
  <div data-testid={ `${index}-recipe-card` }>
    <img
      data-testid={ `${index}-card-img` }
      src={ src }
      alt="imagem da receita"
      width="50px"
    />
    <span data-testid={ `${index}-card-name` }>{name}</span>
  </div>
);

CardFoodsOrDrinks.propTypes = {
  index: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default CardFoodsOrDrinks;
