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
  } = useContext(RecipesContext);
  const [categories, setCategories] = useState({ meals: [], drinks: [] });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setTypeSearch(type);
    setTypeDisplaySearch('filter');
    setPropSearch('?c=');
    setInputSearch(e.target.name);
  };
  const limit = 5;
  useEffect(() => {
    setCategories(type === 'meal' ? categoriesMeal : categoriesDrinks);
  }, [categoriesDrinks, categoriesMeal, type]);

  return (
    <div>
      { (categoriesMeal && categoriesDrinks)
      && categories[type === 'meal' ? 'meals' : 'drinks']
        .slice(0, limit).map((category) => (
          <button
            type="submit"
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
