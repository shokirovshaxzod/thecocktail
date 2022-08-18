import { createStore } from 'redux';
import  thunk  from 'redux-thunk';
import { applyMiddleware } from 'redux';
import CocktailRedux from './CocktailRedux';

export const store = createStore(CocktailRedux, applyMiddleware(thunk));
