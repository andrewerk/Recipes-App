import React from 'react';
// import DoneDrinkCard from '../components/DoneDrinkCard';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FilterSavedRecipes from '../components/FilterSavedRecipes';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import '../css/Done-recipes.css';
import useFetch from '../hooks/useFetch';

function DoneRecipes() {
  const { data: x } = useFetch('meal', 'search', '?s=', '');
  console.log(x);
  // const { data: y } = useFetch('cocktail', 'search', '?s=', '');
  // console.log(y);
  // function tagMap() {
  //   (recipe.strTags).split(',').map((tag) => <button)
  // }
  return (
    <div>
      <HeaderWithoutSearch title="Done Recipes" />
      <FilterSavedRecipes />
      {x && x.meals.map((recipe, index) => (
        <DoneRecipeCard
          key={ index }
          imgSource={ recipe.strMealThumb }
          category={ recipe.strCategory }
          recipeName={ recipe.strMeal }
          index={ index }
          dateModified={ recipe.dateModified }
          nationality={ recipe.strArea }
          tagName={ recipe.strTags }
        />))}
      {/* {y && y.drinks.map((recipe, index) => (
        <DoneDrinkCard
          key={ index }
          imgSource={ recipe.strDrinkThumb }
          recipeName={ recipe.strDrink }
          category={ recipe.strAlcoholic }
          dateModified={ recipe.dateModified }
        />
      ))} */}
    </div>
  );
}

export default DoneRecipes;
