import React from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import ExploreByNationalities from '../components/ExploreByNationalities';

const ExploreFoodsByNat = () => (
  <div>
    <HeaderComponent pageTitle="Explore Nationalities" />
    <ExploreByNationalities />
    <FooterComponent />
  </div>
);

export default ExploreFoodsByNat;
