import React from 'react';
import { string } from 'prop-types';

function Instructions({ instructions }) {
  return (
    <div
      data-testid="instructions"
    >
      <h2>instructions</h2>

      <p>{instructions}</p>

    </div>

  );
}

export default Instructions;

Instructions.propTypes = {
  instructions: string,
}.isRequired;
