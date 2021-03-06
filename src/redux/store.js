import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// Import the necessary methods for saving and loading localStorage
import { save, load } from "redux-localstorage-simple";

import { initialState } from './initialState';
import { reducer as productsReducer } from './productsRedux';
import { reducer as userReducer } from './userRedux';
import { reducer as cartReducer } from './cartRedux';


// define reducers
const reducers = {
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  load({preloadedState: initialState}),
  composeWithDevTools(
    applyMiddleware(thunk, save())
  )
);
