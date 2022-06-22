import React, { useContext } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import SearchBarHeader from '../components/SearchBarHeader';
import RecipesContext from '../context/RecipesContext';

const Foods = () => {
  const { isSearch } = useContext(RecipesContext);
  return (
    <div>
      <HeaderComponent pageTitle="Foods" />
      {isSearch && <SearchBarHeader />}
      <FooterComponent />
    </div>
  );
};

export default Foods;
