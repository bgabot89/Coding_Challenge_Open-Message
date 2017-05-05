import React, { Component } from 'react';
import connect from 'react-redux';

class BeerList extends Component {
  //renders an individual data from beer
  renderBeer(BeerData) {
    return (
      <tr>
        <td> <h1>Drink Some: {BeerData.name}</h1></td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>You are going to Drink:</th>
          </tr>
        </thead>
        <tbody>
          {this.props.beer.map(this.renderBeer)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return { beer: state.beer };
}

export default connect(mapStateToProps)(BeerList);
