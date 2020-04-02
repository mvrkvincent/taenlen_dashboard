import { RECEIVE_ERROR } from '../actions/cell_actions';
import {
  USER_ERROR,
  REGISTER_ERROR,
  LOGIN_ERROR,
} from '../actions/auth_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case USER_ERROR: 
    case LOGIN_ERROR: 
    case REGISTER_ERROR:
    case RECEIVE_ERROR: {
      return action.payload;
    }
    default: 
      return state;
  }
};