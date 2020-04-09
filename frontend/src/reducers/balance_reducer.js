import {
  RECEIVE_BALANCE
} from '../actions/balance_actions';

const initialState = {
  income: 0,
  expenses: 0
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_BALANCE: {
      return {
        ...state,
        income: action.payload.income,
        expenses: action.payload.expenses
      };
    }

    default:
      return state;
  }
};