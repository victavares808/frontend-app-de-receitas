import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DetailsDrink from '../../pages/DetailsDrink';
import DetailsFood from '../../pages/DetailsFood';
import Drinks from '../../pages/Drinks';
import Explore from '../../pages/Explore';
import ExploreDrinks from '../../pages/ExploreDrinks';
import ExploreFoods from '../../pages/ExploreFoods';
import ExploreFoodsByIng from '../../pages/ExploreFoodsByIng';
import Foods from '../../pages/Foods';
import Login from '../../pages/Login';
import ProgressDrink from '../../pages/ProgressDrink';
import ProgressFood from '../../pages/ProgressFood';
import ExploreDrinksByIng from '../../pages/ExploreDrinksByIng';
import ExploreFoodsByNat from '../../pages/ExploreFoodsByNat';
import Profile from '../../pages/Profile';
import DoneRecipes from '../../pages/DoneRecipes';
import FavoriteRacipes from '../../pages/FavoriteRacipes';
import ExploreDrinksByNat from '../../pages/ExploreDrinksByNat';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods/:id" component={ DetailsFood } />
        <Route path="/drinks/:id" component={ DetailsDrink } />
        <Route path="/foods/:id/in-progress" component={ ProgressFood } />
        <Route path="/drinks/:id/in-progress" component={ ProgressDrink } />
        <Route path="/foods" component={ Foods } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/explore/foods/nationalities" component={ ExploreFoodsByNat } />
        <Route path="/explore/foods/ingredients" component={ ExploreFoodsByIng } />
        <Route path="/explore/foods" component={ ExploreFoods } />
        <Route path="/explore/drinks/nationalities" component={ ExploreDrinksByNat } />
        <Route path="/explore/drinks/ingredients" component={ ExploreDrinksByIng } />
        <Route path="/explore/drinks" component={ ExploreDrinks } />
        <Route path="/explore" component={ Explore } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRacipes } />
      </Switch>
    );
  }
}

export default Routes;
