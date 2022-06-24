import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExploreNationalitiesContext from './ExploreNationalitiesContext';
import { fetchAllNationalities, fetchByArea } from '../services/NationalitiesApi';

const ExploreNationalitiesProvider = ({ children }) => {
  const [nationalities, setNationalities] = useState([]);
  const [foods, SetFoods] = useState([]);
  const [area, setArea] = useState('American');
  const [filterFoods, setFilterFoods] = useState();
  const MAX_LENGTH = 12;

  useEffect(() => {
    const fetchNationalities = async () => {
      const data = await fetchAllNationalities();
      setNationalities(data);
    };

    const fetchFoodByArea = async () => {
      const data = await fetchByArea(area);
      SetFoods(data);
    };

    fetchNationalities();
    fetchFoodByArea();
  }, [area]);

  useEffect(() => {
    const filter = () => {
      if (foods) {
        const data = foods.filter((_food, indexFood) => indexFood < MAX_LENGTH);
        setFilterFoods(data);
      }
    };
    filter();
  }, [foods]);

  const handleArea = (value) => {
    setArea(value);
  };

  const contextValue = {
    nationalities,
    filterFoods,
    area,
    handleArea,
  };

  return (
    <ExploreNationalitiesContext.Provider value={ contextValue }>
      {children}
    </ExploreNationalitiesContext.Provider>
  );
};

ExploreNationalitiesProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default ExploreNationalitiesProvider;
