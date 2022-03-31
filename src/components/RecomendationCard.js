import React from 'react';
import { string } from 'prop-types';

function RecomendationCard({ index, src, name }) {
  return (
    <div
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ src }
        alt={ name }
      />
      <p
        data-testid={ `${index}-recomendation-title` }
      >
        {name}
      </p>

    </div>
  );
}

export default RecomendationCard;

RecomendationCard.propTypes = {
  index: string,
  src: string,
  name: string,
}.isRequired;
