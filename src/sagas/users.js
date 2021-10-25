/* Rule of thumb: nombrar el archivo de sagas de acuerdo a las
acciones de las cuáles se hará cargo */

import {
  takeEvery,
  call,
  fork,
  put,
  takeLatest,
  take,
} from 'redux-saga/effects';
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
    yield put(
      actions.userError({
        error: 'An error occurred when trying to get the users',
      })
    );
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
    yield put(
      actions.userError({
        error: 'An error occurred when trying to create the user',
      })
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers); //To get the updated list of users
  } catch (error) {
    yield put(
      actions.userError({
        error: 'An error occurred when trying to delete the user',
      })
    );
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      //Blocking-saga
      userId: action.payload.userId,
    });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
