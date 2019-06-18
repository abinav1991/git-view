import { all } from 'redux-saga/effects';
import { watchHomeSagas } from './containers/home/sagas';

export default function* rootSaga() {
  yield all([
    watchHomeSagas(),
  ]);
}
