import { combineReducers } from 'redux';
import FoodReducer from './reducer_food';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  food: FoodReducer
});

export default rootReducer;
