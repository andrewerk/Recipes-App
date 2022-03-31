import React from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FilterButtons from '../components/FilterButtons';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import '../css/Done-recipes.css';

function DoneRecipes() {
  return (
    <div>
      <HeaderWithoutSearch title="Done Recipes" />
      <FilterButtons />
      <DoneRecipeCard />
    </div>
  );
}

export default DoneRecipes;
