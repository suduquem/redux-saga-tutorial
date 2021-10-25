/* Para combinar los reducers, por ahora solo hay uno,
pero así se escala la app */

import { combineReducers } from 'redux';
import UserReducer from './users';

export default combineReducers({
  users: UserReducer,
});
