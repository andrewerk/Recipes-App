import React from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import FilterSavedRecipes from '../components/FilterSavedRecipes';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';
import '../css/Done-recipes.css';

function DoneRecipes() {
  const doneRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  const teste = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(teste);
  return (
    <div>
      <HeaderWithoutSearch title="Done Recipes" />
      <FilterSavedRecipes />
      { teste.map((recipe, index) => (recipe.type === 'drink'
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
          />)
        : (
          <DoneRecipeCard
            key={ recipe.id }
            hifen="-"
            index={ index }
            image={ recipe.image }
            category={ recipe.category }
            name={ recipe.name }
            doneDate={ recipe.doneDate }
            nationality={ recipe.nationality }
            tags={ (recipe.tags) }
          />)
      ))}
    </div>
  );
}

export default DoneRecipes;
