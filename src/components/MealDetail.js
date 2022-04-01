import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import RecomendationCard from './RecomendationCard';
import '../css/MealDetail.css';
import BtnStartRecipe from './BtnStartRecipe';
import ButtonShare from './ButtonShare';
import ButtonFavorite from './ButtonFavorite';

function MealDetail({ meal, recommended }) {
  const [ingredients, setIngredients] = useState([]);
  const [carouselSlides, setCarouselSlides] = useState();
  const srcVideo = meal[0].strYoutube.replace('https://www.youtube.com/watch?v=', '');

  useEffect(() => {
    const listIngredients = Object.keys(meal[0])
      .filter((item) => item.includes('Ingredient'))
      .map((key) => meal[0][key])
      .filter((item) => item !== '' && item !== null);

    const listMeasures = Object.keys(meal[0])
      .filter((item) => item.includes('Measure'))
      .map((key) => meal[0][key])
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
  }, [meal]);

  useEffect(() => {
    const cardsLength = 6;
    if (recommended) {
      const recommendLength = recommended.drinks
        .filter((item, index) => index < cardsLength);
      setCarouselSlides(recommendLength);
    }
  }, [recommended]);

  return (
    <div>
      {meal.map((e) => (
        <div
          key={ e.idMeal }
        >
          <img
            src={ e.strMealThumb }
            alt={ e.strMeal }
            data-testid="recipe-photo"
          />
          <div className="title-container">
            <h1
              data-testid="recipe-title"
            >
              {e.strMeal}
            </h1>
            <ButtonShare />
            <ButtonFavorite />
          </div>
          <p
            data-testid="recipe-category"
          >
            {e.strCategory}
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
          <div className="video-container">
            <h2>Video</h2>
            <iframe width="520" height="315" src={ `https://www.youtube.com/embed/${srcVideo}` } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-testid="video" />
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
                      src={ card.strDrinkThumb }
                      name={ card.strDrink }

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

MealDetail.propTypes = {
  meal: object,
}.isRequired;

export default MealDetail;
