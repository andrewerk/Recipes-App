import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import '../css/IngredientSteps.css';

function IngredientsStep({ meal }) {
  const [checkboxList, setCheckboxList] = useState([]);
  const [checkedIngredient, setCheckedIngredient] = useState([]);
  useEffect(() => {
    const listIngredients = Object.keys(meal)
      .filter((item) => item.includes('Ingredient'))
      .map((key) => meal[key])
      .filter((item) => item !== '' && item !== null);

    const listMeasures = Object.keys(meal)
      .filter((item) => item.includes('Measure'))
      .map((key) => meal[key])
      .filter((item) => item !== '' && item !== null);

    const list = listIngredients.map((item, index) => `${item} - ${listMeasures[index]}`);

    setCheckboxList(list);
  }, [meal]);

  const handleCheck = ({ target }) => {
    let checkedList = [...checkedIngredient];
    if (target.checked) {
      checkedList = [...checkedIngredient, target.id];
    } else {
      const removeIngredient = checkedIngredient.filter((item) => item !== target.id);
      checkedList = [...removeIngredient];
    }
    setCheckedIngredient(checkedList);
  };

  return (
    <>
      <h2>Ingredients</h2>
      <ul>
        {checkboxList.map((ingredient, index) => (
          <li
            key={ ingredient }
          >
            <label
              htmlFor={ ingredient }
            >
              <input
                type="checkbox"
                id={ ingredient }
                data-testid={ `${index}-ingredient-step` }
                onChange={ handleCheck }
              />
              <span
                className={
                  checkedIngredient.includes(ingredient) && 'checked-ingredient'
                }
              >
                {ingredient}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>

  );
}

export default IngredientsStep;

IngredientsStep.propTypes = {
  meals: object,
}.isRequired;
