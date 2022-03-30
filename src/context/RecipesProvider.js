import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import useFetch from '../hooks/useFetch';

function RecipesProvider({ children }) {
  const [typeSearch, setTypeSearch] = useState('');
  const [typeDisplaySearch, setTypeDisplaySearch] = useState('');
  const [propSearch, setPropSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const { data: searchResult } = useFetch(
    typeSearch, typeDisplaySearch, propSearch, inputSearch,
  );
  return (
    <RecipesContext.Provider
      value={ {
        setTypeSearch,
        setTypeDisplaySearch,
        setPropSearch,
        setInputSearch,
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
