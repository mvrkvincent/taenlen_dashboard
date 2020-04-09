import {
  RECEIVE_BALANCE
} from '../actions/balance_actions';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_BALANCE: {
      return action.payload;
    }
    default:
      return state;
  }
};