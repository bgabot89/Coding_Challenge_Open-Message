import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import FoodList from '../containers/food_list';

export default class App extends Component {
  render () {
    return (
      <div className="Recipe-section">
        <header>
        </header>
          <h1 className="recipe-name"> Search for a Random Recipe </h1>
        <SearchBar />
        <FoodList />
      </div>
    )
  }
};
