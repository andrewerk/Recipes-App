import React, { useState, useEffect, useContext } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function ButtonFavorite() {
  const [favorite, setFavorite] = useState(false);
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  const { actualFood } = useContext(RecipesContext);
  // const [objFood, setObjFood] = useState({});
  // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // useEffect(() => {
  //   if (localStorage.getItem('favoriteRecipes') === null) {
  //     localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  //   }
  //   // const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  //   // localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteStorage, ]))
  // }, [favoriteRecipes]);

  useEffect(() => {
    if (actualFood.idMeal) {
      const obj = {
        id: actualFood.idMeal,
        type: 'food',
        nationality: actualFood.strArea,
        category: actualFood.strCategory,
        alcoholicOrNot: '',
        name: actualFood.strMeal,
        image: actualFood.strMealThumb,
      };
      setObjFood(obj);
    }
    if (actualFood.idDrink) {
      const obj = {
        id: actualFood.idDrink,
        type: 'drink',
        nationality: actualFood.strArea,
        category: actualFood.strCategory,
        alcoholicOrNot: actualFood.strAlcoholic,
        name: actualFood.strDrink,
        image: actualFood.strDrinkThumb,
      };
      setObjFood(obj);
    }
  }, [actualFood]);

  useEffect(() => {
    if (favorite) {
      setFavIcon(blackHeartIcon);
    } else setFavIcon(whiteHeartIcon);
  }, [favorite]);

  const handleFav = () => {
    setFavorite(!favorite);
  };

  return (
    <input
      type="image"
      src={ favIcon }
      alt="Favorite Icon"
      onClick={ () => handleFav() }
      data-testid="favorite-btn"
    />
  );
}

export default ButtonFavorite;
