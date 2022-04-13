import React, { useRef } from 'react';
import './css/MenuList.css';
import PropTypes from 'prop-types';

const MenuList = (props) => {
  const { history, clickCocktail, clickMeal } = props;

  const foods = useRef();
  const explore = useRef();
  const drinks = useRef();

  const handleClick = (name) => {
    if (name === 'foods') {
      foods.current.classList.add('active');
      explore.current.classList.remove('active');
      drinks.current.classList.remove('active');
      clickMeal();
    }
    if (name === 'explore') {
      explore.current.classList.add('active');
      foods.current.classList.remove('active');
      drinks.current.classList.remove('active');
      history.push('/explore');
    }
    if (name === 'drinks') {
      drinks.current.classList.add('active');
      explore.current.classList.remove('active');
      foods.current.classList.remove('active');
      clickCocktail();
    }
  };
  return (
    <ul className="menuList">
      <li ref={ foods }>
        <a
          href="##"
          onClick={ () => handleClick('foods') }
          data-testid="food-bottom-btn"
        >
          <span className="icon">
            <ion-icon name="pizza-outline" />
          </span>
          <span className="text">Foods</span>
        </a>
      </li>
      <li ref={ explore }>
        <a
          href="##"
          onClick={ () => handleClick('explore') }
          data-testid="explore-bottom-btn"
        >
          <span className="icon">
            <ion-icon name="wine-outline" />
          </span>
          <span className="text">Drinks</span>
        </a>
      </li>
      <li ref={ drinks }>
        <a
          href="##"
          onClick={ () => handleClick('drinks') }
          data-testid="drinks-bottom-btn"
        >
          <span className="icon">
            <ion-icon name="compass-outline" />
          </span>
          <span className="text">Explore</span>
        </a>
      </li>
      <div className="indicator" />
    </ul>
  );
};

export default MenuList;

MenuList.propTypes = {
  history: PropTypes.shape().isRequired,
  clickCocktail: PropTypes.func.isRequired,
  clickMeal: PropTypes.func.isRequired,
};
