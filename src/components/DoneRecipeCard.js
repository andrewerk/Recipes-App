import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipeCard({
  imgSource, category, recipeName, dateModified, index, tagName, nationality }) {
  return (
    <div className="done-recipe-card-container">
      <img
        alt="done recipe"
        className="done-recipe-image"
        data-testid={ `${index}-horizontal-image` }
        src={ imgSource }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${nationality}-${category}`}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>
        {recipeName}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {dateModified}
      </p>
      <img
        alt="share icon"
        className="share-icon"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
      />
      <button
        type="button"
        data-testid={ `${index}-${tagName}-horizontal-tag` }
      >
        {tagName}
      </button>
    </div>
  );
}

DoneRecipeCard.propTypes = {
  category: PropTypes.string,
  doneDate: PropTypes.string,
  imgSource: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
  recipeName: PropTypes.string,
  tagName: PropTypes.string,
}.isRequired;

export default DoneRecipeCard;
