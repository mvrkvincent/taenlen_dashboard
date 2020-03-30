import { LOGOUT_SUCCESS } from '../actions/auth_actions';
import { 
  STAGE_CELL, 
  REMOVE_CELL
} from '../actions/cell_actions';


const initialState = {
  staged: {},
  all: {},
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STAGE_CELL: {
      return { ...state, staged: { 'staged': action.payload } };
    }
    case REMOVE_CELL:
    case LOGOUT_SUCCESS: {
      const alteredState = Object.assign({}, state);
      delete alteredState.staged[action.cell];
      return alteredState;
    }
      
    default:
      return state;
  }
};