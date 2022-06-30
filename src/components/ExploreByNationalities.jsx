import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchInitialFood } from '../services/FetchInitial';
import { fetchAllNationalities, fetchByArea } from '../services/NationalitiesApi';

const ExploreByNationalities = () => {
  const [country, setCountry] = useState('All');
  const [allFoods, setAllFoods] = useState([]);
  const [nameArea, setNameArea] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchNat = async () => {
      const options = await fetchAllNationalities();
      const all = [{ strArea: 'All' }];
      setNameArea([...all, ...options]);
    };
    fetchNat();
  }, []);

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

  console.log(allFoods, 'a');

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
      {allFoods
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-recipe-card` }
            onClick={ () => history.push(`/foods/${idMeal}`) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `${strMealThumb}/preview` }
              alt="Foto da Receita"
            />
            <span data-testid={ `${index}-card-name` }>{strMeal}</span>
          </button>))}
    </div>
  );
};

export default ExploreByNationalities;
