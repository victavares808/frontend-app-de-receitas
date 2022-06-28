import React from 'react';
import FavoriteButton from './buttons/FavoriteButton';
import ShareIcon from './buttons/ShareIcon';
import StartRecipe from './buttons/StartRecipe';

const RecipeDetailsComponent = () => (
  <>
    <img data-testid="recipe-photo" alt="imagem da receita" />
    <h2 data-testid="recipe-title">Titulo</h2>
    <h4 data-testid="recipe-category">Categoria</h4>
    <ShareIcon />
    <FavoriteButton />
    {/* <h3 data-testid="${index}-ingredient-name-and-measure">Ingredients</h3> */}
    <li />
    <h3 data-testid="instructions">Instructions</h3>
    <spam>texto</spam>
    <h3>Video</h3>
    {/* <video data-testid="video" /> */}
    {/* <h3 data-testid="${index}-recomendation-card">Recommended</h3> */}
    <StartRecipe />
  </>
);

export default RecipeDetailsComponent;
