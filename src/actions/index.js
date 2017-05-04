import axios from 'axios';
//API KEY
const API_KEY = '7e350a55077647c5590fd0b9eb0189fa';

const ROOT_URL = `http://food2fork.com/api/search?key=${API_KEY}`;
//create constant variable for fetching food
export const FETCH_FOOD = 'FETCH_FOOD';

/***when doing an XML HttpRequest from a different domain, but browser is blocking it- USE CORS***/
export function fetchFood(food) {
  const url = `${ROOT_URL}&q=${food}`;
  const request = axios.get(url);

  console.log('Request', request);

  //returns a promise and sends it as a payload
  return  {
    type: FETCH_FOOD,
    payload: request //optional property that stores data for this type of action
  };
}
