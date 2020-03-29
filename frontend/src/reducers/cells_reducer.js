import { 
  STAGE_CELL, 
  REMOVE_CELL
} from '../actions/cell_actions';

const initialState = {};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STAGE_CELL: {
      return Object.assign({}, state, { staged:  action.payload });
    }
    case REMOVE_CELL: {
      const alteredState = Object.assign({}, state);
      delete alteredState.staged;
      // delete alteredState.all[action.cell];
      return alteredState;
    }
      
    default:
      return state;
  }
};