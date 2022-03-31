import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import IngredientCard from '../components/IngredientCard';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';

function ExploreByIngredients({ location }) {
  const [type, setType] = useState('');
  const [objKey, setObjKey] = useState('');
  const [internObjKey, setInternObjKey] = useState('');
  const {
    setTypeSearch,
    setTypeDisplaySearch,
    setPropSearch,
    setInputSearch,
    setRedirected,
  } = useContext(RecipesContext);
  const { pathname } = location;
  const history = useHistory();
  useEffect(() => {
    if (pathname === '/explore/foods/ingredients') {
      setType('meal');
      setObjKey('meals');
      setInternObjKey('strIngredient');
    } else {
      setType('cocktail');
      setObjKey('drinks');
      setInternObjKey('strIngredient1');
    }
  }, [pathname]);
  const { data } = useFetch(type, 'list', '?i=', 'list');
  const maxIngredients = 12;
  const handleClick = (ingredient) => {
    setTypeSearch(type);
    setRedirected(true);
    setTypeDisplaySearch('filter');
    setPropSearch('?i=');
    setInputSearch(ingredient);
    if (pathname === '/explore/foods/ingredients') {
      history.push('/foods');
    } else { history.push('/drinks'); }
  };
  return (
    <div>
      <HeaderWithoutSearch title="Explore Ingredients" />
      {data
        && data[objKey].slice(0, maxIngredients).map((ingredient, index) => (
          <button
            key={ ingredient[internObjKey] }
            type="button"
            onClick={ () => handleClick(ingredient[internObjKey]) }
          >
            <IngredientCard
              type={ type }
              name={ ingredient[internObjKey] }
              index={ index }
            />
          </button>
        ))}
      <Footer />
    </div>
  );
}

ExploreByIngredients.propTypes = {
  history: object,
}.isRequired;

export default ExploreByIngredients;
