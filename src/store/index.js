import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const initialState = {
  // characters: [],
  // forecast: null,
  // loading: false
};
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
