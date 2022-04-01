import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import RecomendationCard from './RecomendationCard';
import '../css/MealDetail.css';
import BtnStartRecipe from './BtnStartRecipe';
import ShareAndFavorite from './ShareAndFavorite';

function DrinkDetail({ drink, recommended }) {
  console.log(drink);
  const [ingredients, setIngredients] = useState([]);
  const [carouselSlides, setCarouselSlides] = useState();

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
    console.log(recommended);
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
            <ShareAndFavorite />
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
      <BtnStartRecipe />
    </div>
  );
}

export default DrinkDetail;

DrinkDetail.propTypes = {
  data: object,
}.isRequired;
