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
      return {...state, 
        darkMode: !state.darkMode
      };
    }
    
    case SET_VIEW: {
      return {...state,
        view: action.payload
      };
    }

    case RECEIVING_USER:
      return {...state,
        isLoading: true 
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_RECEIVED: {
      return {...state,
        view: 'spending',
        isLoading: false,
        isAuthenticated: true
      };
    }

    case USER_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {...state,
        isLoading: false,
        isAuthenticated: false,
        darkMode: state.darkMode
      };

    case LOGOUT_SUCCESS: {
      return {...initialState,
        darkMode: state.darkMode
      };
    }

    default:
      return state;
  }
};