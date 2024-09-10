import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Auth} from './slices';

const rootReducer = combineReducers({
  auth: Auth.reducer,
});
const store = configureStore({reducer: rootReducer});
export default store;
