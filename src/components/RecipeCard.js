import React from 'react';
import { string, number, object } from 'prop-types';
import '../css/components/RecipeCard.css';

function RecipeCard({ name, index, imgSrc, id, history, type }) {
  return (
    <div
      data-testid={ `${index}-recipe-card` }
      className="col-6 recipe-card"
    >
      <button
        type="button"
        onClick={ () => history.push(`/${type}/${id}`) }
        className="btn-card"
      >
        <div className="btn-body">
          <img
            src={ imgSrc }
            alt="recipe"
            data-testid={ `${index}-card-img` }
            className="img-fluid"
          />
          <p
            data-testid={ `${index}-card-name` }
            className="m-0 golden-btn"
          >
            { name }
          </p>
        </div>
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
