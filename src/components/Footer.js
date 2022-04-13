import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import '../css/components/Footer.css';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  const {
    setSearchBar,
    setRedirected,
  } = useContext(RecipesContext);
  const clickMeal = () => {
    setSearchBar(false);
    setRedirected(false);
    history.push('/foods');
  };
  const clickCocktail = () => {
    setSearchBar(false);
    setRedirected(false);
    history.push('/drinks');
  };
  return (
    <footer className="footer" data-testid="footer">
      <input
        className="drink-footer-btn"
        data-testid="drinks-bottom-btn"
        type="image"
        src={ drinkIcon }
        alt="drink icon"
        onClick={ clickCocktail }
      />
      <input
        data-testid="explore-bottom-btn"
        type="image"
        src={ exploreIcon }
        alt="explore icon"
        onClick={ () => history.push('/explore') }
      />
      <input
        data-testid="food-bottom-btn"
        type="image"
        src={ mealIcon }
        alt="meal icon"
        onClick={ clickMeal }
      />
    </footer>
  );
}

export default Footer;
