import React, { useState, useContext, useEffect } from 'react';
import ExploreNationalitiesContext from '../context/ExploreNationalitiesContext';
import { fetchInitialFood } from '../services/FetchInitial';
import { fetchByArea } from '../services/NationalitiesApi';

const ExploreByNationalities = () => {
  const [country, setCountry] = useState('All');
  const [allFoods, setAllFoods] = useState([]);
  const { nameArea } = useContext(ExploreNationalitiesContext);

  useEffect(() => {
    const filteredFoods = async () => {
      if (country === 'All') {
        const initialInfo = await fetchInitialFood();
        return setAllFoods(initialInfo);
      }
      const byArea = await fetchByArea(country);
      return setAllFoods(byArea);
    };
    filteredFoods();
  }, [country]);

  console.log(allFoods);

  return (
    <div>
      <select
        data-testid="explore-by-nationality-dropdown"
        value={ country }
        onChange={ ({ target: { value } }) => setCountry(value) }
      >
        {nameArea
          .map(({ strArea }, index) => (
            <option
              key={ index }
              data-testid={ `${strArea}-option` }
            >
              {strArea}
            </option>))}
      </select>
    </div>
  );
};

export default ExploreByNationalities;
