import React from 'react';

const RecipeDetailsComponent = () => (
  <>
    <img data-testid="recipe-photo" alt="imagem da receita" />
    <h2 data-testid="recipe-title">Titulo</h2>
    <h4 data-testid="recipe-category">Categoria</h4>
    <button type="button" data-testid="share-btn">compartilhar</button>
    <button type="button" data-testid="favorite-btn">3</button>
    {/* <h3 data-testid="${index}-ingredient-name-and-measure">Ingredients</h3> */}
    <li />
    <h3 data-testid="instructions">Instructions</h3>
    <spam>texto</spam>
    <h3>Video</h3>
    {/* <video data-testid="video" /> */}
    {/* <h3 data-testid="${index}-recomendation-card">Recommended</h3> */}
    <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
  </>
);

export default RecipeDetailsComponent;
