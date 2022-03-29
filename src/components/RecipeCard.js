import React from 'react';
import { string, number, object } from 'prop-types';

function RecipeCard({ name, index, imgSrc, id, history }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <button
        type="button"
        onClick={ () => history.push(`/foods/${id}`) }
      >
        Detail
        <img
          src={ imgSrc }
          alt="ingredient-foto"
          data-testid={ `${index}-card-img` }
        />
        <p
          data-testid={ `${index}-card-name` }
        >
          { name }
        </p>
      </button>

    </div>
  );
}

RecipeCard.propTypes = {
  name: string,
  imgSrc: string,
  index: number,
  history: object,
}.isRequired;

export default RecipeCard;
