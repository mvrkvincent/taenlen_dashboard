import { 
  RECEIVE_CELL 
} from '../actions/cell_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let key = Math.random(2);
  switch (action.type) {
    case RECEIVE_CELL: {
      return Object.assign({}, state, { [key]: action.payload });
    }
    default:
      return state;
  }
};