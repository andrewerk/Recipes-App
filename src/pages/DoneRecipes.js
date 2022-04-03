import React, { useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import '../css/Done-recipes.css';

function DoneRecipes() {
  const doneRecipesFromLocal = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filteredDoneRecipes, setFilteredDoneRecipes] = useState(doneRecipesFromLocal);

  return (
    <div>
      <HeaderWithoutSearch title="Done Recipes" />
      <div className="btn-container">
        <button
          className="done-recipes-btn"
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ () => setFilteredDoneRecipes(doneRecipesFromLocal) }
        >
          All
        </button>
        <button
          className="done-recipes-btn"
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ () => setFilteredDoneRecipes(filteredDoneRecipes
            .filter((recipe) => recipe.type === 'food')) }
        >
          Food
        </button>
        <button
          className="done-recipes-btn"
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ () => setFilteredDoneRecipes(filteredDoneRecipes
            .filter((recipe) => recipe.type === 'drink')) }
        >
          Drinks
        </button>
      </div>
      { filteredDoneRecipes.map((recipe, index) => (recipe.type === 'drink'
        ? (
          <DoneRecipeCard
            key={ recipe.id }
            index={ index }
            image={ recipe.image }
            alcoholicOrNot={ recipe.alcoholicOrNot }
            name={ recipe.name }
            doneDate={ recipe.doneDate }
            nationality=""
            category=""
            hifen=""
            tags={ (recipe.tags) }
            type={ recipe.type }
            id={ recipe.id }
          />)
        : (
          <DoneRecipeCard
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

export default DoneRecipes;
