// import React, { useEffect, useState } from 'react';
// import { object } from 'prop-types';
// import '../css/IngredientSteps.css';

// function IngredientsStepFood({ meal }) {
//   const [checkboxList, setCheckboxList] = useState([]);
//   const [checkedIngredient, setCheckedIngredient] = useState([]);
//   const [checked] = useState(true);

//   useEffect(() => {
//     const localIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));
//     console.log(localIngredients);
//     setCheckedIngredient(localIngredients.meals[meal.idMeal]);
//   }, [setCheckedIngredient, meal.idMeal]);

//   useEffect(() => {
//     const localIngredients = JSON.parse(localStorage.getItem('inProgressRecipes'));
//     const obj = {
//       ...localIngredients,
//       meals: {
//         [meal.idMeal]: [...checkedIngredient],
//       },
//     };
//     localStorage.setItem('inProgressRecipes', JSON.stringify(obj));
//   }, [checkedIngredient, meal.idMeal]);

//   useEffect(() => {
//     const listIngredients = Object.keys(meal)
//       .filter((item) => item.includes('Ingredient'))
//       .map((key) => meal[key])
//       .filter((item) => item !== '' && item !== null);

//     const listMeasures = Object.keys(meal)
//       .filter((item) => item.includes('Measure'))
//       .map((key) => meal[key])
//       .filter((item) => item !== '' && item !== null);

//     const list = listIngredients.map((item, index) => `${item} - ${listMeasures[index]}`);

//     setCheckboxList(list);
//   }, [meal]);

//   const handleCheck = ({ target }) => {
//     let checkedList = [...checkedIngredient];
//     if (target.checked) {
//       checkedList = [...checkedIngredient, target.name];
//     } else {
//       const removeIngredient = checkedIngredient.filter((item) => item !== target.name);
//       checkedList = [...removeIngredient];
//     }
//     setCheckedIngredient(checkedList);
//   };

//   return (
//     <>
//       <h2>Ingredients</h2>
//       <ul>
//         {checkboxList.map((ingredient, index) => (
//           <li
//             key={ ingredient }
//           >
//             <label
//               htmlFor={ ingredient }
//               data-testid={ `${index}-ingredient-step` }
//             >
//               <input
//                 type="checkbox"
//                 name={ ingredient }
//                 onChange={ handleCheck }
//                 checked={
//                   checkedIngredient.includes(ingredient) ? checked : !checked
//                 }
//               />
//               <span
//                 className={
//                   checkedIngredient.includes(ingredient)
//                     ? 'checked-ingredient' : 'non-checked'
//                 }
//               >
//                 {ingredient}
//               </span>
//             </label>
//           </li>
//         ))}
//       </ul>
//     </>

//   );
// }

// export default IngredientsStepFood;

// IngredientsStep.propTypes = {
//   meal: object,
// }.isRequired;
