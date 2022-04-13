import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../css/components/SearchBar.css';

function SearchBar({ type }) {
  const {
    setTypeSearch,
    setTypeDisplaySearch,
    setPropSearch,
    setInputSearch,
  } = useContext(RecipesContext);
  const [radioFilter, setRadioFilter] = useState('ingredients');
  const [input, setInput] = useState('');
  const firstLetter = 'first-letter';
  const handleClick = (e) => {
    e.preventDefault();
    setTypeSearch(type);
    if (radioFilter === 'ingredients') {
      setTypeDisplaySearch('filter');
      setPropSearch('?i=');
      setInputSearch(input);
    }
    if (radioFilter === 'name') {
      setTypeDisplaySearch('search');
      setPropSearch('?s=');
      setInputSearch(input);
    }
    if (radioFilter === firstLetter) {
      if (input.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        setTypeDisplaySearch('search');
        setPropSearch('?f=');
        setInputSearch(input);
      }
    }
  };

  return (
    <form
      type=""
      className="search-bar"
    >
      <div className="d-flex align-items-center">
        <label
          htmlFor="ingredients"
        >
          <input
            type="radio"
            id="ingredients"
            name="ingredients"
            value="ingredients"
            checked={ radioFilter === 'ingredients' }
            data-testid="ingredient-search-radio"
            onChange={ () => setRadioFilter('ingredients') }
          />
          Ingredients
        </label>
        <label
          htmlFor="name"
        >
          <input
            type="radio"
            id="name"
            name="name"
            value="name"
            checked={ radioFilter === 'name' }
            data-testid="name-search-radio"
            onChange={ () => setRadioFilter('name') }
          />
          Name
        </label>
        <label
          htmlFor="first-letter"
        >
          <input
            type="radio"
            id="first-letter"
            name="first-letter"
            value="first-letter"
            checked={ radioFilter === firstLetter }
            data-testid="first-letter-search-radio"
            onChange={ () => setRadioFilter(firstLetter) }
          />
          First Letter
        </label>
      </div>
      <div className="d-flex">
        <input
          type="text"
          data-testid="search-input"
          value={ input }
          onChange={ ({ target }) => setInput(target.value) }
        />
        <div className="input-group-append">
          <button
            type="submit"
            onClick={ (e) => handleClick(e) }
            data-testid="exec-search-btn"
            className="btn btn-outline-dark "
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
