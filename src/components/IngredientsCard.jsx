import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchFoodIng, fetchDrinkIng } from '../services/fetchIngredients';

const IngredientsCard = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [foodIngredients, setFoodIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);
  const MAX_INDEX = 12;

  useEffect(() => {
    const fetchFoodIngredient = async () => {
      const data = await fetchFoodIng();
      setFoodIngredients(data);
    };
    fetchFoodIngredient();
  }, []);

  useEffect(() => {
    const fetchDrinkIngredient = async () => {
      const data = await fetchDrinkIng();
      setDrinkIngredients(data);
    };
    fetchDrinkIngredient();
  }, []);

  return (
    <div>
      {pathname === '/explore/foods/ingredients' && (
        <div>
          {
            foodIngredients.length
            && foodIngredients.filter((_card, indexCard) => indexCard < MAX_INDEX)
              .map((card, index) => (
                <section key={ index } data-testid={ `${index}-ingredient-card` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    alt={ card.strIngredient }
                    src={ `https://www.themealdb.com/images/ingredients/${card.strIngredient}-Small.png` }
                  />
                  <h3 data-testid={ `${index}-card-name` }>
                    {card.strIngredient}
                  </h3>
                </section>
              ))
          }
        </div>
      )}
      {pathname === '/explore/drinks/ingredients' && (
        <div>
          {
            drinkIngredients.length
            && drinkIngredients.filter((_card, indexCard) => indexCard < MAX_INDEX)
              .map((card, index) => (
                <section key={ index } data-testid={ `${index}-ingredient-card` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    alt={ card.strIngredient1 }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${card.strIngredient1}-Small.png` }
                  />
                  <h3 data-testid={ `${index}-card-name` }>
                    {card.strIngredient1}
                  </h3>
                </section>
              ))
          }
        </div>
      )}
    </div>

  );
};
export default IngredientsCard;
