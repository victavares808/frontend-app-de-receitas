import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

const ShareIcon = () => {
  const [hasCopy, setHasCopy] = useState(false);

  const copyToClipBoard = () => {
    const urlCompleta = window.location.href;
    copy(urlCompleta);
    global.alert('Link copied!');
    setHasCopy(true);
  };

  return (
    <div>
      <input
        type="image"
        data-testid="share-btn"
        src={ shareIcon }
        alt="Botão de favoritar"
        onClick={ () => copyToClipBoard() }
      />
      {hasCopy && <p>Link copied!</p>}
    </div>

  );
};

export default ShareIcon;
