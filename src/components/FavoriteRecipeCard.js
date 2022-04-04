import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function FavoriteRecipeCard({
  image, category, name,
  index, nationality, alcoholicOrNot, hifen, type, id }) {
  const history = useHistory();
  const [copyAlert, setCopyAlert] = useState(false);
  const handleShare = () => {
    const copyLink = `http://localhost:3000/${type}s/${id}`;
    navigator.clipboard.writeText(copyLink);
    setCopyAlert(true);
  };

  const { setFilteredFavoriteRecipes } = useContext(RecipesContext);

  function handleFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    setFilteredFavoriteRecipes(newFavoriteRecipes);
  }

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
      <input
        type="image"
        alt="share icon"
        className="share-icon"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        onClick={ () => handleShare() }
      />
      {copyAlert && <p>Link copied!</p>}
      <input
        type="image"
        src={ blackHeartIcon }
        alt="Favorite Icon"
        onClick={ () => handleFavorite() }
        data-testid={ `${index}-horizontal-favorite-btn` }
      />
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  alcoholicOrNot: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default FavoriteRecipeCard;
