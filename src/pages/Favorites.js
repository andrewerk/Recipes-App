import React from 'react';
import FilterSavedRecipes from '../components/FilterSavedRecipes';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

function Favorites() {
  return (
    <div>
      <HeaderWithoutSearch title="Favorite Recipes" />
      <FilterSavedRecipes />
    </div>
  );
}

export default Favorites;
