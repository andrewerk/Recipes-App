import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import useFetch from '../hooks/useFetch';

function RecipesProvider({ children }) {
  const [typeSearch, setTypeSearch] = useState('');
  const [typeDisplaySearch, setTypeDisplaySearch] = useState('');
  const [propSearch, setPropSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [searchBar, setSearchBar] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const { data, isLoading, errorState } = useFetch(
    typeSearch, typeDisplaySearch, propSearch, inputSearch,
  );
  const [searchResult, setSearchResult] = useState({ drinks: [], meals: [] });
  useEffect(() => {
    if (data) setSearchResult(data);
  }, [data]);
  const [clipboard, setClipboard] = useState('');
  const [actualFood, setActualFood] = useState({});
  const { data: categoriesMeal } = useFetch('meal', 'list', '?c=', 'list');
  const { data: categoriesDrinks } = useFetch('cocktail', 'list', '?c=', 'list');
  const favoriteRecipesFromLocal = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredFavoriteRecipes,
    setFilteredFavoriteRecipes] = useState(favoriteRecipesFromLocal);
  const [finishButton, setFinishButton] = useState(true);

  return (
    <RecipesContext.Provider
      value={ {
        setTypeSearch,
        setTypeDisplaySearch,
        setPropSearch,
        setInputSearch,
        setSearchBar,
        setSearchResult,
        setRedirected,
        setClipboard,
        setActualFood,
        setFilteredFavoriteRecipes,
        setFinishButton,
        redirected,
        errorState,
        isLoading,
        searchBar,
        categoriesMeal,
        categoriesDrinks,
        data,
        searchResult,
        clipboard,
        actualFood,
        favoriteRecipesFromLocal,
        filteredFavoriteRecipes,
        finishButton,
      } }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
