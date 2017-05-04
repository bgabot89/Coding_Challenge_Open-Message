import React, { Component } from 'react';
import connect from 'react-redux';

class BeerList extends Component {
  //renders an individual data from beer
  renderBeer (BeerData) {
    return (
      <tr>
        <td> <h1>Drink Some: {BeerData.name}</h1></td>
      </tr>
    );
  }
}


export default connect
