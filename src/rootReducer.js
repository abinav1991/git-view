import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import homeReducer from './containers/home/reducer';

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    home: homeReducer,
  });
}
