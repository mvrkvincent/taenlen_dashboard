import {
  SET_VIEW
} from '../actions/ui_actions';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  USER_RECEIVED
} from '../actions/auth_actions';

const initialState = {
  view: 'login'
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_VIEW: {
      return Object.assign({}, state, {view: action.payload});
    }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_RECEIVED: {
      return Object.assign({}, state, { view: 'month' });
    }
    case LOGOUT_SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
};