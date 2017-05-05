import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

//randomizes a number
function getRandomFood(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//create a variable that randomizes a number from 0 to 30, and grabs taht specific food from an array
var randomNum = getRandomFood(0,30);

class FoodList extends Component {

  renderFood(foodData) {
    return (
      <tr>
        <td> <h1>Cook Some: {foodData.recipes[randomNum].title}</h1></td>
        <td>
        <img className ="food-image" src={`${foodData.recipes[randomNum].image_url}`}/>
        </td>
        <td>
        <a href={`${foodData.recipes[randomNum].source_url}`}>Link to Recipe</a>
        </td>
      </tr>
    );
  }

//append all data here
  render () {
    return (
      <table className="table table-hover">
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
