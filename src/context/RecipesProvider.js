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
  const { data: categoriesMeal } = useFetch('meal', 'list', '?c=', 'list');
  const { data: categoriesDrinks } = useFetch('cocktail', 'list', '?c=', 'list');
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
        redirected,
        errorState,
        isLoading,
        searchBar,
        categoriesMeal,
        categoriesDrinks,
        searchResult } }
    >
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
