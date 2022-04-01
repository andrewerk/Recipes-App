import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';
import MealDetail from '../components/MealDetail';
import DrinkDetail from '../components/DrinkDetail';
import RecipesContext from '../context/RecipesContext';

function FoodDetail({ location, match: { params: { id } } }) {
  const [type, setType] = useState('');
  const [recommendType, setRecommendType] = useState('');
  const { setClipboard } = useContext(RecipesContext);

  useEffect(() => {
    const { pathname } = location;
    setClipboard(pathname);
    if (pathname.includes('foods')) {
      setType('meal');
      setRecommendType('cocktail');
    } else {
      setType('cocktail');
      setRecommendType('meal');
    }
  }, [location, setClipboard]);
  const { data } = useFetch(type, 'lookup', '?i=', id);
  const { data: recommended } = useFetch(recommendType, 'search', '?s=');

  return (
    <>
      <p>Food Detail</p>
      {(data && data.meals)
      && <MealDetail
        meal={ data.meals }
        recommended={ recommended }
      />}
      {(data && data.drinks)
      && <DrinkDetail
        drink={ data.drinks }
        recommended={ recommended }
      />}
    </>

  );
}

export default FoodDetail;

FoodDetail.propTypes = {
  match: object,
}.isRequired;
