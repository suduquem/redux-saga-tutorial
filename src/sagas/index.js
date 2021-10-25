import { all } from 'redux-saga/effects';
import usersSagas from './users';

export default function* rootSaga() {
  yield all([
    // Spread operator: crea un nuevo array en base al que se le pasa
    ...usersSagas,
  ]);
}
