import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { favoriteRecipe } from '../../helpers/LocalStorage';

const FavoriteButton = ({ favoriteItem, isFavorite }) => {
  const [newIsFavorite, setNewIsFavorite] = useState(false);

  useEffect(() => {
    setNewIsFavorite(isFavorite);
  }, [isFavorite]);

  const onClick = () => {
    favoriteRecipe(favoriteItem);
    setNewIsFavorite(!newIsFavorite);
  };
  return (
    <input
      type="image"
      data-testid="favorite-btn"
      src={ !newIsFavorite ? whiteHeartIcon : blackHeartIcon }
      alt="Botão de favoritar"
      onClick={ onClick }
    />
  );
};

FavoriteButton.propTypes = {
  favoriteItem: PropTypes.object,
  isFavorite: PropTypes.bool,
}.isRequired;

export default FavoriteButton;
