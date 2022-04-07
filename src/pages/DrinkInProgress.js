import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import TopRecipe from '../components/TopRecipe';
import IngredientsStep from '../components/IngredientSteps';
import Instructions from '../components/Instructions';
import RecipesContext from '../context/RecipesContext';

function DrinkInProgress() {
  const { id } = useParams();
  const { data } = useFetch('cocktail', 'lookup', '?i=', id);
  const { setClipboard } = useContext(RecipesContext);
  setClipboard(`/drinks/${id}`);

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

      <button
        data-testid="finish-recipe-btn"
        type="button"
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default DrinkInProgress;
