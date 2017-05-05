//splits reducers into separate functions
import { combineReducers } from 'redux';
import FoodReducer from './reducer_food';
import BeerReducer from './reducer_beer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  //creates two separate states for the two apis using two reducers: foodReducer and beerReducer
  food: FoodReducer,
  beer: BeerReducer
});

export default rootReducer;
