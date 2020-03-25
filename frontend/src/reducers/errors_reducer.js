import {
  USER_ERROR,
  REGISTER_ERROR,
  LOGIN_ERROR,
  LOGOUT_SUCCESS
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case USER_ERROR: 
    case LOGIN_ERROR: 
    case REGISTER_ERROR:
    case LOGOUT_SUCCESS: {
      return action.payload;
    }
    default: 
      return state;
  }
};