import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './buttons/NoFavoriteButton';
import ShareIcon from './buttons/ShareIcon';
import StartRecipe from './buttons/StartRecipe';

const RecipeDetailsComponent = ({
  srcImage, srcVideo, recipeName, recipeCategory, recipeText, ingredients
}) => (

  <>
    <img data-testid="recipe-photo" src={srcImage} alt="imagem da receita" />
    <h2 data-testid="recipe-title">
      {recipeName}
    </h2>
    <ul data-testid="recipe-ingredients">
      {ingredients.map((ingredient, index) => {
        return (
          <li key={index}>{`${ingredient.name} - ${ingredient.measure}`}</li>
        )
      })}
    </ul>
    <h4 data-testid="recipe-category">
      {recipeCategory}
    </h4>
    <ShareIcon />
    <FavoriteButton />
    <h3>Ingredients</h3>
    {/* <li data-testid={ `${index}-ingredient-name-and-measure` } /> */}
    <h3>Instructions</h3>
    <p data-testid="instructions">
      {recipeText}
    </p>
    <h3>Video</h3>
    <track data-testid="videos" src={srcVideo} />
    {/*   <h3 data-testid={ `${index}-recomendation-card` }>Recommended</h3> */}
    <StartRecipe />
  </>
);

RecipeDetailsComponent.propTypes = {
  srcImage: PropTypes.string,
  srcVideo: PropTypes.string,
  recipeCategory: PropTypes.string,
  recipeName: PropTypes.string,
  recipeText: PropTypes.string,
}.isRequired;

export default RecipeDetailsComponent;
