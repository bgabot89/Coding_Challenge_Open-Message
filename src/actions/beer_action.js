import axios from 'axios';

//no API needed, creating a variable for the beer url
const BEER_URL = `https://api.punkapi.com/v2/beers/random`;

//create variable to fetch beer data
export const FETCH_BEER = 'FETCH_BEER';

export function fetchBeer(beer) {
  const url = `${BEER_URL}`;
  const request = axios.get(url);

  //send a request to the api, and search if the payload/request is a promise, send it to the reducer

  return {
    type: FETCH_BEER,
    payload: request
  }
};
