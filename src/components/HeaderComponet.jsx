import React from 'react';
import imageProfile from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const HeaderComponent = () => (

  <div>
    <button
      type="button"
      data-testid="profile-top-btn"
      src={ imageProfile }
      alt="imagem do profile"
    // onClick={}
    />

    <h2 data-testid="page-title">Foods</h2>

    <button
      type="button"
      data-testid="search-top-btn"
      src={ searchIcon }
      alt="imagem do profile"
    />
  </div>
);

export default HeaderComponent;
