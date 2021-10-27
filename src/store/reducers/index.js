import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import charactersReducer from './charactersReducer';

export default combineReducers({
  loading: loadingReducer,
  characters: charactersReducer,
});
