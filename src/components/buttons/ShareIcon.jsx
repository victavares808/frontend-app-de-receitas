import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

const ShareIcon = () => (
  <button
    type="button"
    data-testid="share-btn"
    src={ shareIcon }
    alt="Botão de favoritar"
  />
);

export default ShareIcon;
