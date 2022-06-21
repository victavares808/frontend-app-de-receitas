import React from 'react';
import imageProfile from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const HeaderComponent = () => (

  <div>
    <button
      type="button"
      data-testid="profile-top-btn"
    // onClick={}
    >
      <img src={ imageProfile } alt="imagem do profile" />

    </button>
    <h2 data-testid="page-title">Foods</h2>
    <button
      type="button"
      data-testid="search-top-btn"
    >
      <img src={ searchIcon } alt="imagem do profile" />

    </button>
  </div>
);

export default HeaderComponent;
