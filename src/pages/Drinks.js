import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipesContext from '../context/RecipesContext';
import RecipeCard from '../components/RecipeCard';
import FilterButton from '../components/FilterButton';
import '../css/pages/Drinks.css';

const phrase = 'Sorry, we haven\'t found any recipes for these filters.';

function Drinks(props) {
  const {
    searchResult,
    setTypeSearch,
    setTypeDisplaySearch,
    setPropSearch,
    setInputSearch,
    redirected,
    isLoading,
    categoriesDrinks,
    // errorState,
    // setSearchResult,
    searchBar } = useContext(RecipesContext);
  const history = useHistory();
  const maxIngredients = 12;
  useEffect(() => {
    if (!redirected) {
      setTypeSearch('cocktail');
      setTypeDisplaySearch('search');
      setPropSearch('?s=');
      setInputSearch('');
    }
  }, [setTypeDisplaySearch, setPropSearch, setTypeSearch, setInputSearch, redirected]);
  useEffect(() => {
    if (!searchResult.drinks && !searchResult.meals) {
      global.alert(phrase);
    }
  }, [searchResult]);
  // useEffect(() => {
  //   console.log(errorState);
  //   if (errorState === 'Unexpected end of JSON input') {
  //     global.alert(phrase);
  //   }
  return (
    <div className="drinks">
      <div className="bg-fixed" />
      <div className="bg-blur" />
      <div>
        <Header title="Drinks" />
      </div>
      {searchBar && <SearchBar
        type="cocktail"
      />}
      { categoriesDrinks && <FilterButton type="cocktail" /> }
      { isLoading && <h2>Loading</h2>}
      <div className="container p-0">
        <div className="row">
          { (searchResult && searchResult.drinks) && ((searchResult.drinks.length === 1
      && !redirected)
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Drinks;
