import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import FoodList from '../containers/food_list';

export default class App extends Component {
  render () {
    return (
      <div className="Recipe-section">
        <header>
          { /*embedding header image here*/ }
        </header>
        <svg className="cupcake" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 272.9 299.5" width="150px">
          <polygon id="lower_x5F_cake" className="st3" points="78.3,154 100.7,212.7 191.3,212.7 210.7,154 "/>
          <g id="upper_x5F_cake">
          	<path className="st4" d="M186.7,85.8c-48.2-59-83.5,0-83.5,0c-44.8,21-24.9,58.5-24.9,58.5h132.4C230,112.6,211.8,102.7,186.7,85.8z"/>
          </g>
          <circle id="cherry" className="st5" cx="144.5" cy="61.6" r="18.4"/>
        </svg>

          <h1 className="logo-name"> Recipizer </h1>

          <h1 className="recipe-name"> Search for a Random Recipe </h1>

        <SearchBar />
        <FoodList />
      </div>
    )
  }
};
