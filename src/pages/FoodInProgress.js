import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import TopRecipe from '../components/TopRecipe';
import IngredientsStep from '../components/IngredientSteps';
import RecipesContext from '../context/RecipesContext';
import Instructions from '../components/Instructions';

function FoodInProgress() {
  const { id } = useParams();
  const { data } = useFetch('meal', 'lookup', '?i=', id);
  const { setActualFood } = useContext(RecipesContext);
  useEffect(() => {
    console.log(data);
  }, [data, setActualFood]);

  return (
    <div>
      <p>Food in progress</p>
      <TopRecipe
        thumb={ data?.meals[0].strMealThumb }
        title={ data?.meals[0].strMeal }
        category={ data?.meals[0].strCategory }
      />

      {data
      && <IngredientsStep meal={ data.meals[0] } />}

      <Instructions instructions={ data?.meals[0].strInstructions } />

      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        Finish Recipe
      </button>

    </div>
  );
}

export default FoodInProgress;
