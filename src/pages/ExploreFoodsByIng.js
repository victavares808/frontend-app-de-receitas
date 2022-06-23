import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import IngredientsCard from '../components/IngredientsCard';

const ExploreFoodsByIng = () => (
  <div>
    <HeaderComponent pageTitle="Explore Ingredients" />
    <IngredientsCard />
    <FooterComponent />

  </div>
);

export default ExploreFoodsByIng;
