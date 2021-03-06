import React, { useState, useEffect, useContext } from 'react';
import { object } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import RecomendationCard from './RecomendationCard';
import '../css/MealDetail.css';
import ButtonStartRecipe from './ButtonStartRecipe';
import ButtonShare from './ButtonShare';
import ButtonFavorite from './ButtonFavorite';
import RecipesContext from '../context/RecipesContext';

function DrinkDetail({ drink, recommended }) {
  const [ingredients, setIngredients] = useState([]);
  const [carouselSlides, setCarouselSlides] = useState();
  const { setActualFood } = useContext(RecipesContext);

  useEffect(() => {
    setActualFood(drink[0]);
  }, [drink, setActualFood]);

  useEffect(() => {
    const listIngredients = Object.keys(drink[0])
      .filter((item) => item.includes('Ingredient'))
      .map((key) => drink[0][key])
      .filter((item) => item !== '' && item !== null);

    const listMeasures = Object.keys(drink[0])
      .filter((item) => item.includes('Measure'))
      .map((key) => drink[0][key])
      .filter((item) => item !== '' && item !== null);

    const ingredientsAndMeasures = listIngredients.map((ingredient, index) => (
      <li
        key={ ingredient }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        <span>{ingredient}</span>
        {' '}
        <span>{listMeasures[index]}</span>
      </li>
    ));
    setIngredients(ingredientsAndMeasures);
  }, [drink]);

  useEffect(() => {
    const cardsLength = 6;
    if (recommended) {
      const recommendLength = recommended.meals
        .filter((item, index) => index < cardsLength);
      setCarouselSlides(recommendLength);
    }
  }, [recommended]);

  return (
    <div>
      {drink.map((e) => (
        <div
          key={ e.idDrink }
        >
          <img
            src={ e.strDrinkThumb }
            alt={ e.strDrink }
            data-testid="recipe-photo"
          />
          <div className="title-container">
            <h1
              data-testid="recipe-title"
            >
              {e.strDrink}
            </h1>
            <ButtonShare />
            <ButtonFavorite testid="favorite-btn" />
          </div>
          <p
            data-testid="recipe-category"
          >
            {e.strAlcoholic}
          </p>
          <div className="ingredients-container">
            <h2>Ingredients</h2>
            <ul>{ingredients}</ul>
          </div>
          <div className="instruction-container">
            <h2>Instructions</h2>
            <p
              data-testid="instructions"
            >
              {e.strInstructions}
            </p>
          </div>
          <div className="recomendation-container">
            <h2>Recommended</h2>
            {carouselSlides && (
              <Carousel>
                {carouselSlides.map((card, index) => (
                  <Carousel.Item
                    key={ index }
                  >
                    <RecomendationCard
                      index={ index }
                      src={ card.strMealThumb }
                      name={ card.strMeal }

                    />
                  </Carousel.Item>))}
              </Carousel>)}
          </div>
        </div>
      ))}
      <ButtonStartRecipe />
    </div>
  );
}

export default DrinkDetail;

DrinkDetail.propTypes = {
  data: object,
}.isRequired;
