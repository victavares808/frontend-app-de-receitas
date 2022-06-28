import React, { useContext, useEffect, useState } from 'react';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponet';
import RecipesContext from '../context/RecipesContext';
import SearchBarHeader from '../components/SearchBarHeader';
import FoodsDrinksContext from '../context/FoodsDrinksContext';
import CardFoodsOrDrinks from '../components/CardFoodsOrDrinks';
import RecipesList from '../components/RecipesList';

const Drinks = () => {
  const { isSearch } = useContext(RecipesContext);
  const { drinks } = useContext(FoodsDrinksContext);
  const [isRender, setIsRender] = useState(false);
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    const verifyMeals = () => {
      if (!drinks || drinks.length === 1) {
        return (
          setIsRender(false),
          setCocktail([])
        );
      }

      const MAX_INDEX = 11;
      const filterDrinks = drinks.filter((_drink, indexDrink) => indexDrink <= MAX_INDEX);

      return (
        setCocktail(filterDrinks),
        setIsRender(true)
      );
    };
    verifyMeals();
  }, [drinks]);

  return (
    <div>
      <HeaderComponent pageTitle="Drinks" />
      {isSearch ? <SearchBarHeader /> : <RecipesList />}
      {isRender && cocktail
        .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
          <CardFoodsOrDrinks
            key={ index }
            index={ index }
            src={ strDrinkThumb }
            name={ strDrink }
            id={ idDrink }
            page="drinks"
          />))}
      <FooterComponent />
    </div>
  );
};

export default Drinks;
