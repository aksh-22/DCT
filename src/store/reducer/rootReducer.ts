import {combineReducers} from '@reduxjs/toolkit';
import store from '../store';
import userReducer from './userReducer';
import numberReducer from './numberReducer';

const rootReducer = combineReducers({
  userReducer,
  numberReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export default rootReducer;
export type AppDispatch = typeof store.dispatch;
