import React from 'react';
import { Route, IndexRoute, Router} from 'react-router';

import App from './components/app';
import RecipeRender from './components/recipe_render';

export default (
  <Router>
      <Route path="/" component={App}/>
      <Route path="/recipe" component={RecipeRender}/>
  </Router>
);
