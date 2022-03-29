import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';
import ExploreByIngredients from './pages/ExploreByIngredients';
import Explore from './pages/Explore';
import Foods from './pages/Foods';
import ExploreByNationality from './pages/ExploreByNationality';

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
            exact
            path="/foods"
            render={ (props) => (
              <Foods { ...props } />
            ) }
          />
          {/*
        <Route
          exact
          path="/drinks"
          render={ (props) => (
            <Drinks { ...props } />
          ) }
        />
        <Route
          exact
          path="/foods/:id"
          render={ (props) => (
            <FoodDetail { ...props } />
          ) }
        />
        <Route
          exact
          path="/drink/:id"
          render={ (props) => (
            <DrinkDetail { ...props } />
          ) }
        />
        <Route
          exact
          path="/foods/:id/in-progress"
          render={ (props) => (
            <FoodInProgress { ...props } />
          ) }
        />
        <Route
          exact
          path="/drink/:id/in-progress"
          render={ (props) => (
            <DrinkInProgress { ...props } />
          ) }
          /> */}
          <Route
            path="/explore/foods/ingredients"
            render={ (props) => (
              <ExploreByIngredients { ...props } />
            ) }
          />
          <Route
            exact
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
          {/*
        <Route
          exact
          path="/profile"
          render={ (props) => (
            <Profile { ...props } />
          ) }
        />
        <Route
          exact
          path="/done-recipes"
          render={ (props) => (
            <DoneRecipes { ...props } />
          ) }
        />
        <Route
          exact
          path="/favorite-recipes"
          render={ (props) => (
            <Favorites { ...props } />
          ) }
        /> */}
        </Switch>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
