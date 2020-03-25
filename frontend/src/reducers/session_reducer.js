import {
  RECEIVING_USER,
  USER_RECEIVED,
  USER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../actions/session_actions';

const token = localStorage.getItem('token');

const initialState = {
  isLoading: false,
  isAuthenticated: token ? true : false,
  user: null,
  token: token
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVING_USER: 
      return {
        ...state,
        isLoading: true
      };
    case USER_RECEIVED:
      
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload
      };
    case USER_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
    case LOGOUT_SUCCESS:
      
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
}