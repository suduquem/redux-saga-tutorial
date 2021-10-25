/* Rule of thumb: nombrar el archivo de sagas de acuerdo a las
acciones de las cuáles se hará cargo */

import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  // Worker Saga
  try {
    const result = yield call(api.getUsers);
    // data.data viene de ver en el navegador qué arroja la API
    // console.log(result);
    yield put(
      actions.getUserSuccess({
        items: result.data.data,
      })
    );
  } catch (error) {
    console.log('Error', error);
  }
}

function* watchGetUsersRequest() {
  // Watcher Saga
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
