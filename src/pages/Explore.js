import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';
import '../css/pages/Explore.css';

function Explore({ history, location }) {
  const [type, setType] = useState({});
  const handleClick = (newUrl) => {
    history.push(newUrl);
  };
  useEffect(() => {
    setType(location.pathname.includes('foods')
      ? { type: 'meal', objKey: 'meals' }
      : { type: 'cocktail', objKey: 'drinks' });
  }, [location]);
  const { data } = useFetch(type.type, 'random', '', '');
  useEffect(() => { console.log(data); }, [data]);
  const handleClickRandom = () => {
    if (type.type === 'meal') history.push(`/foods/${data[type.objKey][0].idMeal}`);
    if (type.type === 'cocktail') history.push(`/drinks/${data[type.objKey][0].idDrink}`);
  };
  const exploreFoods = '/explore/foods';
  const exploreDrinks = '/explore/drinks';
  const { pathname } = location;
  return (
    <div>
      { pathname === '/explore'
    && (
      <section className="explore">
        <div className="bg-fixed" />
        <div className="bg-blur" />
        <HeaderWithoutSearch title="Explore" />
        <div className="btn-container">
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
        </div>
      </section>
    )}
      { (pathname === exploreFoods || pathname === exploreDrinks)
    && (
      <section className="explore">
        <div className="bg-fixed" />
        <div className="bg-blur" />
        <HeaderWithoutSearch
          title={
            pathname === exploreFoods ? 'Explore Foods' : 'Explore Drinks'
          }
        />
        <div className="btn-container">
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
            onClick={ handleClickRandom }
            type="button"
            data-testid="explore-surprise"
          >
            Surprise me!
          </button>
        </div>
      </section>
    )}
      <Footer />
    </div>
  );
}

Explore.propTypes = {
  history: object,
}.isRequired;

export default Explore;
