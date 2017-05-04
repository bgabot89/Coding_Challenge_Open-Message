import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


class FoodList extends Component {
  renderFood(foodData) {
    return (
      <tr>
        <td> <h1>{foodData.recipes[0].title}</h1></td>
        <td>
        <img className ="food-image" src={`${foodData.recipes[0].image_url}`}/>
        </td>
        <td>
        <a href={`${foodData.recipes[0].source_url}`}>Link to Recipe</a>
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          {this.props.food.map(this.renderFood)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return { food: state.food };
}

export default connect(mapStateToProps)(FoodList);
