import React from 'react';
import { string, number, object } from 'prop-types';
import './RecipeCard.css';

function RecipeCard({ name, index, imgSrc, id, history }) {
  return (
    <div data-testid={ `${index}-recipe-card` } className="recipe-card">
      <button
        type="button"
        onClick={ () => history.push(`/foods/${id}`) }
      >
        Detail
        <img
          src={ imgSrc }
          alt="recipe"
          data-testid={ `${index}-card-img` }
          className="recipe-image"
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
