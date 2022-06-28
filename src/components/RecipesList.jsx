import React from 'react';
import PropTypes from 'prop-types';

const RecipesList = ({ all, category, handleCategory }) => (
  <div>
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={ () => all() }
    >
      All
    </button>
    {category
      .map(({ strCategory }, index) => (
        <button
          key={ index }
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          value={ strCategory }
          onClick={ ({ target: { value } }) => handleCategory(value) }
        >
          {strCategory}

        </button>))}
  </div>

);

RecipesList.propTypes = {
  all: PropTypes.func,
  category: PropTypes.arrayOf(PropTypes.object),
  handleCategory: PropTypes.func,
}.isRequired;

export default RecipesList;
