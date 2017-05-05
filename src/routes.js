import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import App from './components/app';
import RecipeRender from './components/recipe_render';

//Defines routes, only the main route renders data, recipe is a placeholder for holding data if the api calls were being rendered and stored in a DB
export default (
  <Router>
      <Route path="/" component={App}/>
      <Route path="/recipe" component={RecipeRender}/>
  </Router>
);
