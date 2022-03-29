import React from 'react';
import PropTypes from 'prop-types';

function IngredientCard({ name, type, index }) {
  return (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        src={ `https://www.the${type}db.com/images/ingredients/${name}-Small.png` }
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
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default IngredientCard;
