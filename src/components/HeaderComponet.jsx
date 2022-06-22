import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from 'react-router-dom';
import imageProfile from '../images/profileIcon.svg';
import SearchBtn from './SearchBtn';

const HeaderComponent = ({ pageTitle }) => {
  const history = useHistory();
  const { location: { pathname } } = history;

  return (
    <div>
      <input
        type="image"
        data-testid="profile-top-btn"
        src={ imageProfile }
        alt="imagem do profile"
        onClick={ () => history.push('/profile') }
      />

      <h2 data-testid="page-title">{pageTitle}</h2>

      {pathname === '/foods' && <SearchBtn />}
      {pathname === '/drinks' && <SearchBtn />}
      {pathname === '/explore/foods/nationalities' && <SearchBtn />}

    </div>

  );
};

HeaderComponent.propTypes = {
  pageTitle: propTypes.string,
}.isRequired;

export default HeaderComponent;
