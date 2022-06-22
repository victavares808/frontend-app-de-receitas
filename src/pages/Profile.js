import React from 'react';
import { useHistory } from 'react-router';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';

const Profile = () => {
  const history = useHistory();

  const redirectToDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const redirectToFavoriteRecipes = () => {
    history.push('/favorite-recipes');
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  const email = localStorage.getItem('user');

  return (
    <div>
      <HeaderComponent pageTitle="Profile" />
      <p data-testid="profile-email">{ email }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ redirectToDoneRecipes }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ redirectToFavoriteRecipes }
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ logout }
      >
        Logout
      </button>
      <FooterComponent />
    </div>
  );
};

export default Profile;
