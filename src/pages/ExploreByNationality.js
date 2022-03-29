import React, { useState } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';

function ExploreByNationality(props) {
  const [value, setValue] = useState('American');
  const { data } = useFetch('meal', 'list', '?a=', 'list');
  const { data: meals } = useFetch('meal', 'filter', '?a=', value);
  console.log(meals);
  const maxIngredients = 12;
  return (
    <div>
      <label htmlFor="coutries">
        <select
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          id="coutries"
          data-testid="explore-by-nationality-dropdown"
        >
          { data && data.meals.map(({ strArea }) => (
            <option
              key={ strArea }
              data-testid={ `${strArea}-option` }
            >
              { strArea }
            </option>
          ))}
        </select>
      </label>
      {meals
        && meals.meals.slice(0, maxIngredients).map((meal, index) => (
          <RecipeCard
            { ...props }
            type="meal"
            key={ meal.strMeal }
            name={ meal.strMeal }
            imgSrc={ meal.strMealThumb }
            index={ index }
            id={ meal.idMeal }
          />
        ))}
    </div>
  );
}

ExploreByNationality.propTypes = {
  history: object,
}.isRequired;

export default ExploreByNationality;
