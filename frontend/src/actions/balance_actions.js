export const RECEIVE_SAVINGS = 'RECEIVE_SAVINGS';

const receiveSavings = payload => ({
  type: RECEIVE_SAVINGS,
  payload
}); 

export const setSavings = balance => async dispatch => {

  try {
    dispatch(receiveSavings(balance));
  } catch (err) {
    console.log('Savings is broken');
  }

};