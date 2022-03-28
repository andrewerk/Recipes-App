import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';

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
          {/* <Route
          exact
          path="/foods"
          render={ (props) => (
            <Foods { ...props } />
          ) }
        />
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
        />
        <Route
          exact
          path="/explore"
          render={ (props) => (
            <Explore { ...props } />
          ) }
        />
        <Route
          exact
          path="/explore/foods"
          render={ (props) => (
            <ExploreFoods { ...props } />
          ) }
        />
        <Route
          exact
          path="/explore/drinks"
          render={ (props) => (
            <ExploreDrinks { ...props } />
          ) }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          render={ (props) => (
            <ExploreFoodByIngredients { ...props } />
          ) }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          render={ (props) => (
            <ExploreDrinkByIngredients { ...props } />
          ) }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          render={ (props) => (
            <ExploreFoodByNation { ...props } />
          ) }
        />
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
