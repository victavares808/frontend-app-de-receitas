import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const CardFoodsOrDrinks = ({ index, src, name, id, page }) => {
  const history = useHistory();

  return (
    <div>
      <button
        data-testid={ `${index}-recipe-card` }
        type="button"
        onClick={ () => history.push(`/${page}/${id}`) }
      >
        <img
          data-testid={ `${index}-card-img` }
          src={ src }
          alt="imagem da receita"
          width="50px"
        />
        <span data-testid={ `${index}-card-name` }>{name}</span>
      </button>
    </div>
  );
};

CardFoodsOrDrinks.propTypes = {
  index: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  page: PropTypes.string,
}.isRequired;

export default CardFoodsOrDrinks;
