// import axios from 'axios';

export const STAGE_CELL = 'STAGE_CELL';
export const RECEIVE_CELL = 'RECEIVE_CELL';
export const REMOVE_CELL = 'REMOVE_CELL';

const receiveStagedCell = payload => ({
  type: STAGE_CELL,
  payload
});

const removeCell = cell => ({
  type: REMOVE_CELL,
  cell
});

const receiveCell = payload => ({
  type: RECEIVE_CELL,
  payload
});

// const config = {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

export const stageCell = cell => async dispatch => {
  
  try {
    dispatch(receiveStagedCell(cell));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }

};

export const submitCell = cell => async dispatch => {

  try {
    dispatch(receiveCell(cell));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }

};

export const deleteCell = id => async dispatch => {
  
  try {
    dispatch(removeCell(id));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }
};