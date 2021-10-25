/* Rule of thumb: nombrar el archivo de sagas de acuerdo a las
acciones de las cuáles se hará cargo */

import { takeEvery, call, fork, put, takeLatest } from 'redux-saga/effects';
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
    console.log('Error getting the users', error);
  }
}

function* watchGetUsersRequest() {
  // Watcher Saga
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

function* createUser(action) {
  console.log('Create action', action);
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsers);
  } catch (error) {
    console.log('Error creating the user', error);
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest)];

export default usersSagas;
