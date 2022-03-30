import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';

const phrase = 'Sorry, we haven\'t found any recipes for these filters.';

function Drinks(props) {
  const { searchResult } = useContext(RecipesContext);
  const history = useHistory();
  const maxIngredients = 12;
  useEffect(() => {
    if (searchResult && searchResult.drinks === null) {
      global.alert(phrase);
    }
  }, [searchResult]);
  return (
    <div>
      <div>
        <Header title="Drinks" />
      </div>
      <SearchBar
        type="cocktail"
      />
      { (searchResult && searchResult.drinks) && (searchResult.drinks.length === 1
        ? history.push(`/drinks/${searchResult.drinks[0].idDrink}`)
        : searchResult.drinks.slice(0, maxIngredients).map((recipe, index) => (
          <RecipeCard
            { ...props }
            key={ recipe.idDrink }
            name={ recipe.strDrink }
            imgSrc={ recipe.strDrinkThumb }
            index={ index }
            id={ recipe.idDrink }
            type="drinks"
          />)))}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Drinks;
