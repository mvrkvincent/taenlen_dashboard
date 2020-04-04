export const SET_VIEW = 'SET_VIEW';
export const SET_DARK_MODE = 'SET_DARK_MODE';

const setView = payload => ({
  type: SET_VIEW,
  payload
});

const setDarkMode = () => ({
  type: SET_DARK_MODE,
});

export const toggleView = view => async dispatch => {
  try {
    dispatch(setView(view));
  } catch (err) {
    dispatch(console.log('View is broken, Everything is broken'));
  }
};

export const toggleDarkMode = () => async dispatch => {
  try {
    dispatch(setDarkMode());
  } catch (err) {
    dispatch(console.log('Dark Mode is broken, Everything is broken'));
  }
};