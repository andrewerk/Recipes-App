import React from 'react';

function FilterSavedRecipes() {
  return (
    <div className="btn-container">
      <button
        className="done-recipes-btn"
        data-testid="filter-by-all-btn"
        type="button"
      >
        All
      </button>
      <button
        className="done-recipes-btn"
        data-testid="filter-by-food-btn"
        type="button"
      >
        Food
      </button>
      <button
        className="done-recipes-btn"
        data-testid="filter-by-drink-btn"
        type="button"
      >
        Drinks
      </button>
    </div>
  );
}

export default FilterSavedRecipes;
