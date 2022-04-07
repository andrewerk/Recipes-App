import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import TopRecipe from '../components/TopRecipe';
import IngredientsStepsFoods from '../components/IngredientStepsFood';
import Instructions from '../components/Instructions';
import RecipesContext from '../context/RecipesContext';

function FoodInProgress() {
  const { id } = useParams();
  const { data } = useFetch('meal', 'lookup', '?i=', id);
  const { setClipboard, setActualFood } = useContext(RecipesContext);

  useEffect(() => {
    setClipboard(`/foods/${id}`);
  }, [id, setClipboard]);

  useEffect(() => {
    setActualFood(data?.meals[0]);
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
      && <IngredientsStepsFoods meal={ data.meals[0] } />}

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
