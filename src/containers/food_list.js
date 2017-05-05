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
      <div className="card text-center">
        <img className ="food-image" src={`${foodData.recipes[randomNum].image_url}`}/>
          <div className="card-block">
            <p class="card-text">You should cook: <b>{foodData.recipes[randomNum].title}</b></p>
          </div>
      </div>
    );
  }

//append all data here
  render () {
    return (
      <div>
          {this.props.food.map(this.renderFood)}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { food: state.food };
}

export default connect(mapStateToProps)(FoodList);
