import { combineReducers } from 'redux';
import FoodReducer from './reducer_food';
import BeerReducer from './reducer_beer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  food: FoodReducer,
  beer: BeerReducer
});

export default rootReducer;
