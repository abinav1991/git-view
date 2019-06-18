/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { github } from './github.reducer';

export default combineReducers({
  alert,
  github
});