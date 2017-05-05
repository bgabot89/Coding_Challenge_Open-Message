import { FETCH_BEER } from '../actions/beer_action';

//within this function create initial state and as well as action passed from FETCH_BEER
export default function (state=[], action) {
  switch (action.type) {
    case 'FETCH_BEER':
      return [ action.payload.data, ...state];
  }
  return state;
}
