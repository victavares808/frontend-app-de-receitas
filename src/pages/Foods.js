import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import RecipeDetaisComponent from '../components/RecipeDetaisComponent';

const Foods = () => (
  <div>
    <HeaderComponent pageTitle="Foods" />
    <FooterComponent />
    <RecipeDetaisComponent />
  </div>
);

export default Foods;
