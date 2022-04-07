import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import '../css/IngredientSteps.css';

function IngredientsStepsFood({ meal }) {
  const [checkboxList, setCheckboxList] = useState([]);
  const [checkedIngredient, setCheckedIngredient] = useState([]);
  const [checked] = useState(true);

  useEffect(() => {
    let getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getInProgressRecipes) {
      const obj = {
        cocktails: {},
        meals: {
          [meal.idMeal]: [],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      getInProgressRecipes = obj;
    }
    if (!getInProgressRecipes.meals) {
      const obj = {
        ...getInProgressRecipes,
        meals: {
          ...getInProgressRecipes.meals,
          [meal.idMeal]: [],
        },
      };
      getInProgressRecipes = obj;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      setCheckedIngredient(getInProgressRecipes.meals[meal.idMeal]);
    }

    if (!getInProgressRecipes.meals[meal.idMeal]) {
      const obj = {
        ...getInProgressRecipes,
        meals: {
          ...getInProgressRecipes.meals,
          [meal.idMeal]: [],
        },
      };
      getInProgressRecipes = obj;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      setCheckedIngredient(getInProgressRecipes.meals[meal.idMeal]);
    }

    setCheckedIngredient(getInProgressRecipes.meals[meal.idMeal]);
  }, [meal.idMeal]);

  useEffect(() => {
    const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const obj = {
      ...getInProgressRecipes,
      meals: {
        ...getInProgressRecipes.meals,
        [meal.idMeal]: [...checkedIngredient],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
  }, [checkedIngredient, meal.idMeal]);

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
      checkedList = [...checkedIngredient, target.name];
    } else {
      const removeIngredient = checkedIngredient.filter((item) => item !== target.name);
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
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                name={ ingredient }
                onChange={ handleCheck }
                checked={
                  checkedIngredient?.includes(ingredient) ? checked : !checked
                }
              />
              <span
                className={
                  checkedIngredient?.includes(ingredient)
                    ? 'checked-ingredient' : 'non-checked'
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

export default IngredientsStepsFood;

IngredientsStepsFood.propTypes = {
  meals: object,
}.isRequired;
