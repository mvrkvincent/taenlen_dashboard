export const RECEIVE_TAB = 'RECEIVE_TAB';
export const DELETE_TAB = 'DELETE_TAB';

const receiveTab = payload => ({
  type: RECEIVE_TAB,
  payload
});

// const config = {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

export const createTab = tab => async dispatch => {
  
  try {
    dispatch(receiveTab(tab));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }

};