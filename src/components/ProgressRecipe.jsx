import React from 'react';
import PropTypes from 'prop-types';
import FinishRecipe from './buttons/FinishRecipe';
import NoFavoriteButton from './buttons/NoFavoriteButton';
import ShareIcon from './buttons/ShareIcon';
import IngredientsList from './IngredientsList';

const ProgressRecipe = ({ src, name, category, instructions, ingredients }) => (
  <>
    <img data-testid="recipe-photo" alt="imagem da receita" src={ src } width="50px" />
    <h2 data-testid="recipe-title">{ name }</h2>
    <ShareIcon />
    <NoFavoriteButton />
    <h4 data-testid="recipe-category">{ category }</h4>
    <h3>Ingredients</h3>
    <p>Ingredients List</p>
    <IngredientsList ingredients={ ingredients } />
    <p data-testid="instructions">{ instructions }</p>
    <FinishRecipe />
  </>
);

ProgressRecipe.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
}.isRequired;

export default ProgressRecipe;
