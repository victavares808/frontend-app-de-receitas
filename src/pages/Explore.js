import React from 'react';
import ExploreComponent from '../components/ExploreComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';

const Explore = () => (
  <div>
    <HeaderComponent pageTitle="Explore" />
    <ExploreComponent />
    <FooterComponent />
  </div>
);

export default Explore;
