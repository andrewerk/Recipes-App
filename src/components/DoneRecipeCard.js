import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../css/Done-recipes-card.css';

function DoneRecipeCard({
  image, category, name,
  doneDate, index, tags, nationality, alcoholicOrNot, hifen, type, id }) {
  const history = useHistory();
  const [copyAlert, setCopyAlert] = useState(false);
  const handleShare = () => {
    const copyLink = `http://localhost:3000/${type}s/${id}`;
    navigator.clipboard.writeText(copyLink);
    setCopyAlert(true);
  };

  return (
    <div
      className="done-recipe-card-container"
    >
      <input
        type="image"
        data-testid={ `${index}-horizontal-image` }
        alt="done recipe"
        className="done-recipe-image"
        src={ image }
        onClick={ () => history.push(`/${type}s/${id}`) }
      />
      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${nationality} ${hifen} ${category}`}
      </p>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {alcoholicOrNot}
      </p>
      <button
        data-testid={ `${index}-horizontal-name` }
        className="clickable-text"
        type="button"
        onClick={ () => history.push(`/${type}s/${id}`) }
      >
        {name}
      </button>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <input
        type="image"
        alt="share icon"
        className="share-icon"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ () => handleShare() }
      />
      {copyAlert && <p>Link copied!</p>}
      { tags.map((tag) => (
        <button
          key={ tag }
          type="button"
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </button>
      )) }
    </div>
  );
}

DoneRecipeCard.propTypes = {
  alcoholicOrNot: PropTypes.string,
  category: PropTypes.string,
  doneDate: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
  name: PropTypes.string,
  tags: PropTypes.string,
}.isRequired;

export default DoneRecipeCard;
