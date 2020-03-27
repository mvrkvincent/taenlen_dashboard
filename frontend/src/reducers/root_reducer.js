import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import errorsReducer from './errors_reducer';
import tabsReducer from './tabs_reducer';

export default combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  tabs: tabsReducer
});