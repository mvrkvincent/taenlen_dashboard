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
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: null
};

export default function (state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVING_USER: 
      return Object.assign({}, state, {isLoading: true});

    case USER_RECEIVED:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        user: action.payload });

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        ...action.payload
      });
      
    case USER_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      });

    default:
      return state;
  }
}