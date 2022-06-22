import React, { useContext } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import RecipesContext from '../context/RecipesContext';
import SearchBarHeader from '../components/SearchBarHeader';

const Drinks = () => {
  const { isSearch } = useContext(RecipesContext);
  return (
    <div>
      <HeaderComponent pageTitle="Drinks" />
      {isSearch && <SearchBarHeader />}
      <FooterComponent />
    </div>
  );
};

export default Drinks;
