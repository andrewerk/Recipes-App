import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function DoneDrinkCard({ imgSource, category, recipeName, doneDate, index }) {
  return (
    <div className="done-recipe-card-container">
      <img
        alt="done recipe"
        className="done-recipe-image"
        data-testid={ `${index}-horizontal-image` }
        src={ imgSource }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {category}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>
        {recipeName}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <img
        alt="share icon"
        className="share-icon"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
      />
    </div>
  );
}

DoneDrinkCard.propTypes = {
  category: PropTypes.string,
  doneDate: PropTypes.string,
  imgSource: PropTypes.string,
  index: PropTypes.number,
  recipeName: PropTypes.string,
}.isRequired;

export default DoneDrinkCard;
