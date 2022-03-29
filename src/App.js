import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodDetail from './pages/FoodDetail';
import DrinkDetail from './pages/DrinkDetail';
import FoodInProgress from './pages/FoodInProgress';
import DrinkInProgress from './pages/DrinkInProgress';
import ExploreByIngredients from './pages/ExploreByIngredients';
import Explore from './pages/Explore';
import ExploreByNationality from './pages/ExploreByNationality';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Login { ...props } />
            ) }
          />
          <Route
            path="/foods"
            render={ (props) => (
              <Foods { ...props } />
            ) }
          />
          <Route
            path="/drinks"
            render={ (props) => (
              <Drinks { ...props } />
            ) }
          />
          <Route
            path="/foods/:id"
            render={ (props) => (
              <FoodDetail { ...props } />
            ) }
          />
          <Route
            path="/drink/:id"
            render={ (props) => (
              <DrinkDetail { ...props } />
            ) }
          />
          <Route
            path="/foods/:id/in-progress"
            render={ (props) => (
              <FoodInProgress { ...props } />
            ) }
          />
          <Route
            path="/drink/:id/in-progress"
            render={ (props) => (
              <DrinkInProgress { ...props } />
            ) }
          />
          <Route
            path="/explore/foods/ingredients"
            render={ (props) => (
              <ExploreByIngredients { ...props } />
            ) }
          />
          <Route
            path="/explore/drinks/ingredients"
            render={ (props) => (
              <ExploreByIngredients { ...props } />
            ) }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            render={ (props) => (
              <ExploreByNationality { ...props } />
            ) }
          />
          <Route
            path="/explore"
            render={ (props) => (
              <Explore { ...props } />
            ) }
          />
          <Route
            path="/profile"
            render={ (props) => (
              <Profile { ...props } />
            ) }
          />
          <Route
            path="/done-recipes"
            render={ (props) => (
              <DoneRecipes { ...props } />
            ) }
          />
          <Route
            path="/favorite-recipes"
            render={ (props) => (
              <Favorites { ...props } />
            ) }
          />
        </Switch>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
