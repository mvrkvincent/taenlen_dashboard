import {
  RECEIVE_SAVINGS
} from '../actions/balance_actions';

const initialState = {
  savings: 0,
  spending: 0
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SAVINGS: {
      return {...state,
        savings: action.payload.savings
      };
    }
    default:
      return state;
  }
};