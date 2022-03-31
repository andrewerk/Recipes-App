import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import './pages.css';
import Footer from '../components/Footer';

function ExploreByNationality(props) {
  const [value, setValue] = useState('All');
  const [urlObj, setUrlObj] = useState(['meal', 'search', '?s=']);
  const { data } = useFetch('meal', 'list', '?a=', 'list');
  const { data: meals } = useFetch(...urlObj);
  useEffect(() => {
    if (value === 'All') {
      setUrlObj(['meal', 'search', '?s=']);
    } else { setUrlObj(['meal', 'filter', '?a=', value]); }
  }, [value, setUrlObj]);
  const maxIngredients = 12;
  const { location: { pathname } } = props;
  return (
    <div>
      {pathname === '/explore/drinks/nationalities'
        ? <h3>Not Found</h3>
        : (
          <>
            <Header title="Explore Nationalities" />
            <div className="recipe-list">
              <label
                htmlFor="coutries"
                className="area-filter"
              >
                <select
                  value={ value }
                  onChange={ ({ target }) => setValue(target.value) }
                  id="coutries"
                  data-testid="explore-by-nationality-dropdown"
                >
                  <option data-testid="All-option">
                    All
                  </option>
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
            type="foods"
            key={ meal.strMeal }
            name={ meal.strMeal }
            imgSrc={ meal.strMealThumb }
            index={ index }
            id={ meal.idMeal }
          />
        ))}
            </div>
          </>) }
      <Footer />
    </div>
  );
}

ExploreByNationality.propTypes = {
  history: object,
}.isRequired;

export default ExploreByNationality;
