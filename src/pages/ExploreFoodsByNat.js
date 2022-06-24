import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import CardFoodsNationalities from '../components/CardFoodsNationalities';

const ExploreFoodsByNat = () => (
  <div>
    <HeaderComponent pageTitle="Explore Nationalities" />
    <CardFoodsNationalities />
    <FooterComponent />
  </div>
);

export default ExploreFoodsByNat;
