export const RECEIVE_SAVINGS = 'RECEIVE_SAVINGS';
export const RECEIVE_SPENDING = 'RECEIVE_SPENDING';

const receiveSavings = payload => ({
  type: RECEIVE_SAVINGS,
  payload
}); 

const receiveSpending = payload => ({
  type: RECEIVE_SPENDING,
  payload
}); 

export const setSavings = balance => async dispatch => {

  try {
    dispatch(receiveSavings(balance));
  } catch (err) {
    console.log('Savings is broken');
  }

};

export const setSpending = balance => async dispatch => {
  debugger
  try {
    dispatch(receiveSpending(balance));
  } catch (err) {
    console.log('Spending is broken');
  }

};