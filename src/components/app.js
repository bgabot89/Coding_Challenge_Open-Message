import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1> Search for a Blank! </h1>
        <SearchBar />

      </div>
    )
  }
};