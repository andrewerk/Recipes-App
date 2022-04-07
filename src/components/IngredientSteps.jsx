import React, { useContext, useEffect, useState } from 'react';
import { object } from 'prop-types';
import '../css/IngredientSteps.css';
import RecipesContext from '../context/RecipesContext';

function IngredientsStep({ meal }) {
  const [checkboxList, setCheckboxList] = useState([]);
  const [checkedIngredient, setCheckedIngredient] = useState([]);
  const [checked] = useState(true);
  const { setFinishButton } = useContext(RecipesContext);

  useEffect(() => {
    let getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getInProgressRecipes) {
      const obj = {
        cocktails: {
          [meal.idDrink]: [],
        },
        meals: {},
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      getInProgressRecipes = obj;
    }
    if (!getInProgressRecipes.cocktails) {
      const obj = {
        ...getInProgressRecipes,
        cocktails: {
          ...getInProgressRecipes.cocktails,
          [meal.idDrink]: [],
        },
      };
      getInProgressRecipes = obj;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      setCheckedIngredient(getInProgressRecipes.cocktails[meal.idDrink]);
    }

    if (!getInProgressRecipes.cocktails[meal.idDrink]) {
      const obj = {
        ...getInProgressRecipes,
        cocktails: {
          ...getInProgressRecipes.cocktails,
          [meal.idDrink]: [],
        },
      };
      getInProgressRecipes = obj;
      localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
      setCheckedIngredient(getInProgressRecipes.cocktails[meal.idDrink]);
    }

    setCheckedIngredient(getInProgressRecipes.cocktails[meal.idDrink]);
  }, [meal.idDrink]);

  useEffect(() => {
    const getInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const obj = {
      ...getInProgressRecipes,
      cocktails: {
        ...getInProgressRecipes.cocktails,
        [meal.idDrink]: [...checkedIngredient],
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
    if (checkboxList.length === checkedIngredient.length) {
      setFinishButton(false);
    } else setFinishButton(true);
  }, [checkboxList.length, checkedIngredient, meal.idDrink, setFinishButton]);

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

export default IngredientsStep;

IngredientsStep.propTypes = {
  meals: object,
}.isRequired;
