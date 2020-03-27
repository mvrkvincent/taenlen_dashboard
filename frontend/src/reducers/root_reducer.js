import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import errorsReducer from './errors_reducer';
import tabsReducer from './tabs_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  tabs: tabsReducer,
  auth: authReducer,
  ui: uiReducer,
  errors: errorsReducer,
});