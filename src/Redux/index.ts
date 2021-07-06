  
import { createStore, combineReducers } from 'redux';

import FavoritesReducer from './FavoritesReducer';

const rootReducer = combineReducers({
  FavoritesReducer: FavoritesReducer,
});

export const store = createStore(rootReducer);