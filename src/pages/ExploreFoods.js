import React from 'react';
import ExploreByFoodOrDrink from '../components/ExploreByFoodOrDrink';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';

const ExploreFoods = () => (
  <div>
    <HeaderComponent pageTitle="Explore Foods" />
    <ExploreByFoodOrDrink />
    <FooterComponent />
  </div>
);

export default ExploreFoods;
