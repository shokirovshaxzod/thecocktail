/* eslint-disable no-undef */
import { url, sCocktailUrl } from '../Services/api';
import { seveData, fetchSingleCocktailsAction } from './Actions/ActonCreater';
export const fetchCocktail = () => async (dispatch) => {
  const res = await fetch(url);
  const data = await res.json();
  dispatch(seveData(data.drinks));
};
export const fetchSingleCocktail = (id) => async (dispatch) => {
  const res = await fetch(`${sCocktailUrl}${id}`);
  const { drinks } = await res.json();
  dispatch(fetchSingleCocktailsAction(drinks));
};
export const fetchSearch = (searchTerm) => async (dispatch) => {
  try {
    const res = await fetch(`${url}${searchTerm}`);
    const data = await res.json();
    const { drinks } = data;
    if (data.drinks) {
      dispatch(seveData(data.drinks));
    } else {
      dispatch(seveData([]));
    }
  } catch (error) {
    console.log(error);
  }
};
