import React, { useContext } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import CardFoodsNationalities from '../components/CardFoodsNationalities';
import ExploreNationalitiesContext from '../context/ExploreNationalitiesContext';

const ExploreFoodsByNat = () => {
  const { nationalities, filterFoods, isRender } = useContext(ExploreNationalitiesContext);

  return (
    <div>
      <HeaderComponent pageTitle="Explore Nationalities" />
      {
        isRender && <CardFoodsNationalities place={ nationalities } foods={ filterFoods } />
      }
      <FooterComponent />
    </div>
  );
};

export default ExploreFoodsByNat;
