import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
  error: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USER_SUCCESS: {
      return {
        ...state, //Existing state
        items: action.payload.items,
      };
    }
    case Types.USER_ERROR: {
      return {
        ...state, //Existing state
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
