import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const NoFavoriteButton = () => (
  <input
    type="image"
    data-testid="favorite-btn"
    src={ whiteHeartIcon }
    alt="Botão de favoritar"
  />
);

export default NoFavoriteButton;
