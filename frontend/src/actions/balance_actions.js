export const RECEIVE_BALANCE = 'RECEIVE_BALANCE';

const receiveBalance = payload => ({
  type: RECEIVE_BALANCE,
  payload
}); 

export const submitCell = balance => async dispatch => {

  try {
    dispatch(receiveBalance(balance));
  } catch (err) {
    console.log('Balance is broken');
  }

};