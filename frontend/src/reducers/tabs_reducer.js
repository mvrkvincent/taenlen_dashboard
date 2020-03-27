import { 
  RECEIVE_TAB 
} from '../actions/tab_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let key = Math.random(2);
  switch (action.type) {
    case RECEIVE_TAB: {
      return Object.assign({}, state, { [key]: action.payload });
    }
    default:
      return state;
  }
};