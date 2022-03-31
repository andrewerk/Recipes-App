import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function FilterButton({ type }) {
  const {
    setTypeSearch,
    setTypeDisplaySearch,
    setPropSearch,
    setInputSearch,
    categoriesDrinks,
    categoriesMeal,
    setRedirected,
  } = useContext(RecipesContext);
  const [clicked, setClicked] = useState('false');
  const [categories, setCategories] = useState({ meals: [], drinks: [] });
  const handleClick = (e) => {
    e.preventDefault();
    setRedirected(true);
    console.log(e.target.name);
    setTypeSearch(type);
    if (clicked === e.target.name || e.target.name === 'All') {
      setTypeDisplaySearch('search');
      setPropSearch('?s=');
      setInputSearch('');
      setClicked(false);
    } else {
      setTypeDisplaySearch('filter');
      setPropSearch('?c=');
      setInputSearch(e.target.name === 'All' ? '' : e.target.name);
      setClicked(e.target.name);
    }
  };
  const limit = 5;
  useEffect(() => {
    setCategories(type === 'meal' ? categoriesMeal : categoriesDrinks);
  }, [categoriesDrinks, categoriesMeal, type]);

  return (
    <div>
      { categories[type === 'meal' ? 'meals' : 'drinks']
        .slice(0, limit).concat({ strCategory: 'All' }).map((category) => (
          <button
            type="button"
            onClick={ (e) => handleClick(e) }
            data-testid={ `${category.strCategory}-category-filter` }
            name={ category.strCategory }
            key={ category.strCategory }
          >
            { category.strCategory }
          </button>
        )) }
    </div>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterButton;
