import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

function FinishButton() {
  const { finishButton } = useContext(RecipesContext);
  const history = useHistory();

  const handleClick = () => {
    history.push('/done-recipes');
  };
  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      disabled={ finishButton }
      onClick={ handleClick }
    >
      Finish Recipe
    </button>
  );
}

export default FinishButton;
