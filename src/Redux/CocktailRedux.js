import { SAVE_DATA, SINGL_COCKTAIL } from './Actions/ActionType';
const initialState = {
  cocktailList: [],
  singlCocktail: {},
  isLoading: true,
};
const CocktialRedux = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, cocktailList: action.payload, isLoading: false };
    case SINGL_COCKTAIL:
      return { ...state, singlCocktail: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default CocktialRedux;
