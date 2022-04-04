import React from 'react';
import { string } from 'prop-types';

function RecipePhoto({ alt, thumb }) {
  return (
    <img
      src={ thumb }
      alt={ alt }
      data-testid="recipe-photo"
    />
  );
}

export default RecipePhoto;

RecipePhoto.propTypes = {
  alt: string,
  thumb: string,
}.isRequired;
