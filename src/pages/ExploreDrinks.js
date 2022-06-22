import React from 'react';
import ExploreByFoodOrDrink from '../components/ExploreByFoodOrDrink';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';

const ExploreDrinks = () => (
  <div>
    <HeaderComponent pageTitle="Explore Drinks" />
    <ExploreByFoodOrDrink />
    <FooterComponent />
  </div>
);

export default ExploreDrinks;
