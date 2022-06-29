import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from './buttons/FavoriteButton';
import ShareIcon from './buttons/ShareIcon';
import StartRecipe from './buttons/StartRecipe';
import { inProgressRecipes } from '../helpers/LocalStorage';

const RecipeDetailsComponent = ({
  srcImage,
  srcVideo, recipeName, recipeCategory, recipeText, ingredients, recommended, id, page,
}) => {
  const INITIAL_STATE = {
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  };

  const [favorites, setFavorites] = useState(INITIAL_STATE);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDone, setIsDone] = useState(false);
  console.log(setFavorites, 'tirar daqui a pouco');

  useEffect(() => {
    const getLocalStorage = () => {
      if (localStorage.getItem('doneRecipes')) {
        const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));
        const verify = doneRecipeStorage.some((recipe) => recipe.id === id);
        setIsDone(verify);
      }
    };
    getLocalStorage();
  }, [id]);

  useEffect(() => {
    const getLocalStorage = () => {
      if (localStorage.getItem('favoriteRecipes')) {
        const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
        const verify = favoriteStorage.some((recipe) => recipe.id === id);
        setIsFavorite(verify);
      }
    };
    getLocalStorage();
  }, [id]);

  const progressRecipeStorage = () => {
    inProgressRecipes(id, ingredients, page);
  };

  const video = () => (
    <div>
      <h3>Video</h3>
      <video
        data-testid="video"
        poster={ srcImage }
      >
        <source src={ srcVideo } />
        <track kind="captions" />
      </video>
    </div>
  );

  return (
    <main>
      <section>
        <img data-testid="recipe-photo" src={ srcImage } alt="imagem da receita" />
        <h2 data-testid="recipe-title">
          {recipeName}
        </h2>
        <h4 data-testid="recipe-category">
          {recipeCategory}
        </h4>
        <ShareIcon />
        <FavoriteButton favoriteItem={ favorites } isFavorite={ isFavorite } />
      </section>
      <section>
        <h3>Ingredients</h3>
        <ul data-testid="recipe-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${ingredient.name} - ${ingredient.measure}`}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Instructions</h3>
        <p data-testid="instructions">
          {recipeText}
        </p>
      </section>
      <section>
        {srcVideo && video()}
      </section>
      <section>
        <h3>Recommended</h3>
        <div
          style={ {
            display: 'flex',
            flexWrap: 'wrap',
            width: '500px',
            height: '230px',
            overflow: 'hidden',
            overflowY: 'auto',
          } }
        >
          {recommended.map(({ name, img, type }, index) => (
            <div key={ index } data-testid={ `${index}-recomendation-card` }>
              <img src={ `${img}/preview` } alt="foto da receita recomendada" />
              <h6>{type}</h6>
              <h4 data-testid={ `${index}-recomendation-title` }>{name}</h4>
            </div>))}
        </div>
      </section>
      <section>
        {!isDone
          && <StartRecipe
            id={ id }
            page={ page }
            storage={ progressRecipeStorage }
          />}
      </section>
    </main>
  );
};

RecipeDetailsComponent.propTypes = {
  srcImage: PropTypes.string,
  srcVideo: PropTypes.string,
  recipeCategory: PropTypes.string,
  recipeName: PropTypes.string,
  recipeText: PropTypes.string,
}.isRequired;

export default RecipeDetailsComponent;
