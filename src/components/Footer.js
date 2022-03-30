import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Footer.css';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <input
        className="drink-footer-btn"
        data-testid="drinks-bottom-btn"
        type="image"
        src={ drinkIcon }
        alt="drink icon"
        onClick={ () => history.push('/drinks') }
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
        onClick={ () => history.push('/foods') }
      />
    </footer>
  );
}

export default Footer;
