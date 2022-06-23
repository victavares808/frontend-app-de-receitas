import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import IngredientsCard from '../components/IngredientsCard';

const ExploreDrinksByIng = () => (
  <div>
    <HeaderComponent pageTitle="Explore Ingredients" />
    <IngredientsCard />
    <FooterComponent />
  </div>
);

export default ExploreDrinksByIng;
