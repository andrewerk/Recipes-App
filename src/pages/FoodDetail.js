import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import useFetch from '../hooks/useFetch';

function FoodDetail({ location, match: { params: { id } } }) {
  const [type, setType] = useState('');

  useEffect(() => {
    const { pathname } = location;
    if (pathname.includes('foods')) {
      setType('meal');
    } else setType('cocktail');
  }, [location]);

  const { data } = useFetch(type, 'lookup', '?i=', id);
  console.log(data);
  return (
    <div>
      <p>Food Detail</p>
    </div>
  );
}

export default FoodDetail;

FoodDetail.propTypes = {
  match: object,
}.isRequired;
