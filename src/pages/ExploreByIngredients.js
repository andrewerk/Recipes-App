import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';
import IngredientCard from '../components/IngredientCard';

function ExploreByIngredients({ location }) {
  const [type, setType] = useState('');
  const [objKey, setObjKey] = useState('');
  const [internObjKey, setInternObjKey] = useState('');
  const { pathname } = location;
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
  return (
    <div>
      {data
        && data[objKey].slice(0, maxIngredients).map((ingredient, index) => (
          <IngredientCard
            type={ type }
            key={ ingredient[internObjKey] }
            name={ ingredient[internObjKey] }
            index={ index }
          />
        ))}
    </div>
  );
}

ExploreByIngredients.propTypes = {
  history: object,
}.isRequired;

export default ExploreByIngredients;
