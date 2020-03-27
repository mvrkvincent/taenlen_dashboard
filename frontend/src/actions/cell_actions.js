export const RECEIVE_CELL = 'RECEIVE_CELL';
export const DELETE_CELL = 'DELETE_CELL';

const receiveCell = payload => ({
  type: RECEIVE_CELL,
  payload
});

// const config = {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

export const createCell = cell => async dispatch => {
  
  try {
    dispatch(receiveCell(cell));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }

};