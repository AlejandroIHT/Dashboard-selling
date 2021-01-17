import { combineReducers } from 'redux';
import mainDataReducer from './mainDataReducer';
import salesForMonthReducer from './salesForMonthReducer';

export default combineReducers({
  mainDataReducer,
  salesForMonthReducer,
});
