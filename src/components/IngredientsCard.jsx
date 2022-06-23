import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import fetchIngredients from '../services/fetchIngredients';

const IngredientsCard = () => {
  // const { location: { pathname } } = history;

  // https://www.themealdb.com/images/ingredients/{card.name}-Small.png

  // bobejto.filter((card)=> card.idcard >=12).map ((card)=> )

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredient = async () => {
      const data = await fetchIngredients();
      setIngredients(data);
    };
    fetchIngredient();
  }, []);

  return (

    <div>
      {
        ingredients.length && ingredients.map((card, index) => (
          <section key={ index } data-testid={ `${card.idIngredient}-ingredient-card` }>
            <img
              data-testid={ `${card.idIngredient}-card-img` }
              alt={ card.strIngredient }
              src={ `https://www.themealdb.com/images/ingredients/${card.strIngredient}-Small.png` }
            />
            <h3 data-testid={ `${card.strIngredient}-card-name` }>
              {card.strIngredient}
            </h3>
          </section>
        ))
      }
    </div>
  );
};
export default IngredientsCard;
