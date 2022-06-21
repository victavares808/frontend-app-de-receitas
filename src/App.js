import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './helpers/routes';
import RecipesProvider from './context/RecipesProvider';
import FoodsDrinksProvider from './context/FoodsDrinksProviders';

function App() {
  return (
    <FoodsDrinksProvider>
      <RecipesProvider>
        <Routes />
      </RecipesProvider>
    </FoodsDrinksProvider>
  );
}

export default App;
