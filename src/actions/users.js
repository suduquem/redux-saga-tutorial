export const Types = {
  GET_USER_REQUEST: 'users/get_users_request',
  GET_USER_SUCCESS: 'users/get_users_success',
  CREATE_USER_REQUEST: 'users/create_users_request',
  DELETE_USER_REQUEST: 'users/delete_users_request',
};

export const getUserRequest = () => ({
  type: Types.GET_USER_REQUEST,
});

// Recibe un array of users que vienen de la API
export const getUserSuccess = ({ items }) => ({
  type: Types.GET_USER_SUCCESS,
  payload: {
    items,
  },
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName,
  },
});

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId
  },
});
