import React from 'react';

function BtnStartRecipe() {
  const handleClick = (e) => {
    console.log('click', e);
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="fixed-button"
      onClick={ (e) => handleClick(e) }
    >
      Start Recipe
    </button>
  );
}

export default BtnStartRecipe;
