import { 
  SET_VIEW,
  SET_DARK_MODE
 } from '../actions/ui_actions';

import {
  RECEIVING_USER,
  USER_RECEIVED,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../actions/auth_actions';

const initialState = {
  darkMode: false,
  view: 'login',
  isLoading: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case SET_DARK_MODE: {
      return{...state, 
        darkMode: !state.darkMode
      };
    }
    
    case SET_VIEW: {
      return Object.assign({}, state, {
        view: action.payload
      });
    }

    case RECEIVING_USER:
      return Object.assign({}, state, { 
        isLoading: true 
      });

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_RECEIVED: {
      return Object.assign({}, state, { 
        view: 'week',
        isLoading: false,
        isAuthenticated: true,
      });
    }

    case USER_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
    case LOGOUT_SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
};