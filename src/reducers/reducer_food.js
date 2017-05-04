import { FETCH_FOOD }  from '../actions/index';
//reducer function that will get an action and console log the action
//makes initial state of empty array
export default function (state = [], action) {
  console.log('Action received', action);
  //to avoid mutation in state
  switch (action.type) {
    case 'FETCH_FOOD':
      return [ action.payload.data, ...state ]; //add new food data, not replacing it entirely, don't mutate, return a new instance of state
  }
  return state;
}
