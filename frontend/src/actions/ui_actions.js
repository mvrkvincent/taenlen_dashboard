export const SET_VIEW = 'SET_VIEW';

const setView = payload => ({
  type: SET_VIEW,
  payload
});

export const toggleView = view => async dispatch => {
  try {
    dispatch(setView(view));
  } catch (err) {
    dispatch(console.log('This is broken, Everything is broken'));
  }
};