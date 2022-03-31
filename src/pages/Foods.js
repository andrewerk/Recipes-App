import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const phrase = 'Sorry, we haven\'t found any recipes for these filters.';

function Foods(props) {
  const {
    searchResult,
    setTypeSearch,
    setTypeDisplaySearch,
    setPropSearch,
    setInputSearch,
    // errorState,
    // setSearchResult,
    searchBar } = useContext(RecipesContext);
  const history = useHistory();
  const maxIngredients = 12;
  useEffect(() => {
    setTypeSearch('meal');
    setTypeDisplaySearch('search');
    setPropSearch('?s=');
    setInputSearch('');
  }, [setTypeDisplaySearch, setPropSearch, setTypeSearch, setInputSearch]);
  useEffect(() => {
    console.log(searchResult);
    if (!searchResult.meals && !searchResult.drinks) {
      global.alert(phrase);
    }
  }, [searchResult]);
  // useEffect(() => {
  //   console.log(errorState);
  //   if (errorState === 'Unexpected end of JSON input') {
  //     global.alert(phrase);
  //   }
  return (
    <div>
      <div>
        <Header title="Foods" />
      </div>
      { searchBar && <SearchBar
        type="meal"
      />}
      { (searchResult && searchResult.meals) && (searchResult.meals.length === 1
        ? history.push(`/foods/${searchResult.meals[0].idMeal}`)
        : searchResult.meals.slice(0, maxIngredients).map((recipe, index) => (
          <RecipeCard
            { ...props }
            key={ recipe.idMeal }
            name={ recipe.strMeal }
            imgSrc={ recipe.strMealThumb }
            index={ index }
            id={ recipe.idMeal }
            type="foods"
          />)))}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Foods;
