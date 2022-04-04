import React, { useContext } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import RecipesContext from '../context/RecipesContext';

function Favorites() {
  const { filteredFavoriteRecipes,
    setFilteredFavoriteRecipes, favoriteRecipesFromLocal } = useContext(RecipesContext);

  return (
    <div>
      <HeaderWithoutSearch title="Favorite Recipes" />
      <div className="fav-btn-container">
        <button
          className="favorite-recipes-btn"
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setFilteredFavoriteRecipes(favoriteRecipesFromLocal) }
        >
          All
        </button>
        <button
          className="favorite-recipes-btn"
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setFilteredFavoriteRecipes(filteredFavoriteRecipes
            .filter((recipe) => recipe.type === 'food')) }
        >
          Food
        </button>
        <button
          className="favorite-recipes-btn"
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setFilteredFavoriteRecipes(filteredFavoriteRecipes
            .filter((recipe) => recipe.type === 'drink')) }
        >
          Drinks
        </button>
      </div>
      { filteredFavoriteRecipes && filteredFavoriteRecipes.map((recipe, index) => (
        recipe.type === 'drink'
          ? (
            <FavoriteRecipeCard
              key={ recipe.id }
              index={ index }
              image={ recipe.image }
              alcoholicOrNot={ recipe.alcoholicOrNot }
              name={ recipe.name }
              nationality=""
              category=""
              hifen=""
              type={ recipe.type }
              id={ recipe.id }
            />)
          : (
            <FavoriteRecipeCard
              key={ recipe.id }
              id={ recipe.id }
              hifen="-"
              index={ index }
              image={ recipe.image }
              category={ recipe.category }
              name={ recipe.name }
              nationality={ recipe.nationality }
              type={ recipe.type }
            />)
      ))}
    </div>
  );
}

export default Favorites;
