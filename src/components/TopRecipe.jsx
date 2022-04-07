import React from 'react';
import { string } from 'prop-types';
import ButtonFavorite from './ButtonFavorite';
import ButtonShare from './ButtonShare';

function TopRecipe({ title, thumb, category }) {
  return (
    <>
      <img
        src={ thumb }
        alt={ title }
        data-testid="recipe-photo"
      />
      <h1
        data-testid="recipe-title"
      >
        {title}
      </h1>
      <ButtonShare />
      <ButtonFavorite testid="favorite-btn" />
      <p
        data-testid="recipe-category"
      >
        {category}
      </p>

    </>
  );
}

export default TopRecipe;

TopRecipe.propTypes = {
  title: string,
  thumb: string,
}.isRequired;
