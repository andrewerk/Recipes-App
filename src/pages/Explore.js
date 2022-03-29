import React from 'react';
import { object } from 'prop-types';

function Explore({ history, location }) {
  const handleClick = (newUrl) => {
    history.push(newUrl);
  };
  const exploreFoods = '/explore/foods';
  const exploreDrinks = '/explore/drinks';
  const { pathname } = location;
  return (
    <div>
      { pathname === '/explore'
    && (
      <section>
        <button
          onClick={ () => handleClick(exploreFoods) }
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          onClick={ () => handleClick(exploreDrinks) }
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </section>
    )}
      { (pathname === exploreFoods || pathname === exploreDrinks)
    && (
      <section>
        <button
          onClick={ () => handleClick(`${pathname}/ingredients`) }
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
        { pathname === exploreFoods
        && (
          <button
            onClick={ () => handleClick(`${pathname}/nationalities`) }
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        )}
        <button
          onClick={ () => handleClick(
            `${pathname === exploreFoods
              ? '/foods/:id' : '/drinks/:id'}`,
          ) }
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </section>
    )}
    </div>
  );
}

Explore.propTypes = {
  history: object,
}.isRequired;

export default Explore;
