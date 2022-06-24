import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './helpers/routes';
import RecipesProvider from './context/RecipesProvider';
import FoodsDrinksProvider from './context/FoodsDrinksProviders';
import ExploreNationalitiesProvider from './context/ExploreNationalitiesProvider';

function App() {
  return (
    <RecipesProvider>
      <FoodsDrinksProvider>
        <ExploreNationalitiesProvider>
          <Routes />
        </ExploreNationalitiesProvider>
      </FoodsDrinksProvider>
    </RecipesProvider>
  );
}

export default App;
