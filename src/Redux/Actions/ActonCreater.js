import { FETCH_COOCKTAILS, SAVE_DATA, SINGL_COCKTAIL } from './ActionType';
export const seveData = (data) => ({
  type: SAVE_DATA,
  payload: data,
});
export const fetchCocktailsAction = (data) => ({
  type: FETCH_COOCKTAILS,
});
export const fetchSingleCocktailsAction = (drinks) => ({
  type: SINGL_COCKTAIL,
  payload: drinks[0],
});
