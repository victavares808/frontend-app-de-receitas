import React from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteButton = () => (
  <input
    type="image"
    data-testid="favorite-btn"
    src={ blackHeartIcon }
    alt="Botão de favorito"
  />
);

export default FavoriteButton;
