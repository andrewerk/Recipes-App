import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipePhoto from '../components/RecipePhoto';

function FoodInProgress() {
  // const [type, setType] = useState();
  const { id } = useParams();
  const { data } = useFetch('meal', 'lookup', '?i=', id);
  console.log(data);

  return (
    <div>
      <p>Food in progress</p>
      <RecipePhoto
        thumb={ data?.meals[0].strMealThumb }
        alt={ data?.meals[0].strMeal }
      />
    </div>
  );
}

export default FoodInProgress;
