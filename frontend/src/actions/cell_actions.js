// import axios from 'axios';

export const STAGE_CELL = 'STAGE_CELL';
export const RECEIVE_CELL = 'RECEIVE_CELL';
export const DELETE_CELL = 'DELETE_CELL';

const stageCell = payload => ({
  type: STAGE_CELL,
  payload
});

// const receiveCell = payload => ({
//   type: RECEIVE_CELL,
//   payload
// });

// const config = {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

export const createCell = cell => async dispatch => {
  
  try {
    dispatch(stageCell(cell));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }

};