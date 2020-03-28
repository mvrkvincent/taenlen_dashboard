import { 
  STAGE_CELL 
} from '../actions/cell_actions';

const initialState = {};
export default (state = initialState, action) => {
  Object.freeze(state);
  let key = Math.random(2);
  switch (action.type) {
    case STAGE_CELL: {
      return Object.assign({}, state, { staged: { [action.payload.type]: action.payload }});
    }
    default:
      return state;
  }
};