import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function ButtonFavorite({ testid }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  const { actualFood } = useContext(RecipesContext);
  const [objFood, setObjFood] = useState({});
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    if (actualFood) {
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
          nationality: '',
          category: actualFood.strCategory,
          alcoholicOrNot: actualFood.strAlcoholic,
          name: actualFood.strDrink,
          image: actualFood.strDrinkThumb,
        };
        setObjFood(obj);
      }
    }
  }, [actualFood]);

  useEffect(() => {
    if (isFavorite) {
      setFavIcon(blackHeartIcon);
    } else setFavIcon(whiteHeartIcon);
  }, [isFavorite]);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const findFood = favoriteStorage.find((food) => food.id === objFood.id);
    if (findFood) setIsFavorite(true);
    setFavoriteRecipes(favoriteStorage);
  }, [objFood]);

  const handleFav = () => {
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      localStorage.setItem('favoriteRecipes', JSON.stringify([
        ...favoriteRecipes,
        objFood]));
    } else {
      setIsFavorite(!isFavorite);
      const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const removeRecipe = getFavoriteRecipes.filter((food) => food.id !== objFood.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(removeRecipe));
    }
  };

  return (
    <input
      type="image"
      src={ favIcon }
      alt="Favorite Icon"
      onClick={ () => handleFav() }
      // data-testid="favorite-btn"
      data-testid={ testid }
    />
  );
}

ButtonFavorite.propTypes = {
  testid: PropTypes.string,
}.isRequired;

export default ButtonFavorite;
