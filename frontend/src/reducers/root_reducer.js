import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import errorsReducer from './errors_reducer';
import cellsReducer from './cells_reducer';
import balanceReducer from './balance_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  cells: cellsReducer,  
  balance: balanceReducer,
  auth: authReducer,
  ui: uiReducer,
  errors: errorsReducer,
});