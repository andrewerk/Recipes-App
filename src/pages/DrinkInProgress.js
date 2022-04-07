import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import TopRecipe from '../components/TopRecipe';
import IngredientsStep from '../components/IngredientSteps';
import Instructions from '../components/Instructions';
import RecipesContext from '../context/RecipesContext';
import FinishButton from '../components/FinishButton';

function DrinkInProgress() {
  const { id } = useParams();
  const { data } = useFetch('cocktail', 'lookup', '?i=', id);
  const { setClipboard, setActualFood } = useContext(RecipesContext);

  useEffect(() => {
    setClipboard(`/drinks/${id}`);
  }, [id, setClipboard]);

  useEffect(() => {
    setActualFood(data?.drinks[0]);
  }, [data, setActualFood]);

  return (
    <div>
      <p>Drink in progress</p>
      <TopRecipe
        thumb={ data?.drinks[0].strDrinkThumb }
        title={ data?.drinks[0].strDrink }
        category={ data?.drinks[0].strCategory }
      />

      {data
      && <IngredientsStep meal={ data.drinks[0] } />}

      <Instructions instructions={ data?.drinks[0].strInstructions } />

      <FinishButton />
    </div>
  );
}

export default DrinkInProgress;
