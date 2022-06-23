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
              alt="imagem"
              svg="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=740&t=st=1656011452~exp=1656012052~hmac=fc636b8eb98ba16cf9b874d3fe2a5c869df1436094d6ff2b3d6e1eb471729609"
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
