import React, { useContext } from 'react';
import ExploreNationalitiesContext from '../context/ExploreNationalitiesContext';

const CardFoodsNationalities = () => {
  const {
    nationalities,
    filterFoods,
    area,
    handleArea,
  } = useContext(ExploreNationalitiesContext);

  return (
    <div>
      <select
        data-testid="explore-by-nationality-dropdown"
        value={ area }
        onChange={ ({ target: { value } }) => handleArea(value) }
      >
        {
          nationalities
            .map(({ strArea }, index) => (
              <option
                key={ index }
                data-testid={ `${strArea}-option` }
              >
                {strArea}
              </option>
            ))
        }
      </select>
      {
        filterFoods
          .map(({ strMeal, strMealThumb }, index) => (
            <button
              data-testid={ `${index}-recipe-card` }
              key={ index }
              // onClick={ () => onClick(card.strIngredient) }
              type="button"
            >
              <img
                data-testid={ `${index}-card-img` }
                alt={ strMeal }
                src={ `${strMealThumb}/preview` }
              />
              <span data-testid={ `${index}-card-name` }>
                {strMeal}
              </span>
            </button>
          ))
      }
    </div>
  );
};

export default CardFoodsNationalities;
