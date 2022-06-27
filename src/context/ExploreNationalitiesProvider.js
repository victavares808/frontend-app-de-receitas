import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExploreNationalitiesContext from './ExploreNationalitiesContext';
import { fetchAllNationalities } from '../services/NationalitiesApi';

const ExploreNationalitiesProvider = ({ children }) => {
  const [nameArea, setNameArea] = useState([]);

  useEffect(() => {
    const fetchNat = async () => {
      const options = await fetchAllNationalities();
      const all = [{ strArea: 'All' }];
      setNameArea([...all, ...options]);
    };
    fetchNat();
  }, []);

  const contextValue = {
    nameArea,
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
