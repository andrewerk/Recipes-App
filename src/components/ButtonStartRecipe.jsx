import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function ButtonStartRecipe() {
  const [buttonText, setButtonText] = useState('Start Recipe');
  const { actualFood } = useContext(RecipesContext);
  useEffect(() => {
    if (localStorage.getItem('inProgressRecipes') === null) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({}));
    }
    let resultFind = false;
    const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (recipesInProgress.meals) {
      const objMeal = Object.keys(recipesInProgress.meals);
      resultFind = objMeal.find((id) => id === actualFood.idMeal);
    }
    if (recipesInProgress.cocktails) {
      const objDrink = Object.keys(recipesInProgress.cocktails);
      resultFind = objDrink.find((id) => id === actualFood.idDrink);
    }
    if (resultFind) setButtonText('Continue Recipe');
  }, [actualFood]);

  const history = useHistory();
  const { pathname } = useLocation();

  const handleClick = () => {
    history.push(`${pathname}/in-progress`);
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="fixed-button"
      onClick={ () => handleClick() }
    >
      {buttonText}
    </button>
  );
}

export default ButtonStartRecipe;
