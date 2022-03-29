import React from 'react';
import PropTypes from 'prop-types';

function IngredientCard({ name, index, imgSrc }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        src={ imgSrc }
        alt="ingredient-foto"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        { name }
      </p>
    </div>
  );
}

IngredientCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientCard;
