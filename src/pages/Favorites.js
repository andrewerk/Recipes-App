import React, { useState } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
// import FilterSavedRecipes from '../components/FilterSavedRecipes';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Favorites() {
  const favoriteRecipesFromLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(favoriteRecipesFromLocal);
  const [filteredFavoriteRecipes,
    setFilteredFavoriteRecipes] = useState(favoriteRecipesFromLocal);
  return (
    <div>
      <HeaderWithoutSearch title="Favorite Recipes" />
      {/* <FilterSavedRecipes /> */}
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
          className="done-recipes-btn"
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
              doneDate={ recipe.doneDate }
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
              doneDate={ recipe.doneDate }
              nationality={ recipe.nationality }
              tags={ (recipe.tags) }
              type={ recipe.type }
            />)
      ))}
    </div>
  );
}

export default Favorites;
