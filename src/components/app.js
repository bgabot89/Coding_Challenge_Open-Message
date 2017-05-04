import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import FoodList from '../containers/food_list';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1 id="title"> Search for a Recipe! </h1>
        <SearchBar />
        <FoodList />
      </div>
    )
  }
};
