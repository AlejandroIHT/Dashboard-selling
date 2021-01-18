import { combineReducers } from 'redux';
import mainDataReducer from './mainDataReducer';
import salesForMonthReducer from './salesForMonthReducer';
import categorySalesReducer from './categorySalesReducer';
import favProductReducer from './favProductReducer';
import salesNowReducer from './salesNowReducer';

export default combineReducers({
  mainDataReducer,
  salesForMonthReducer,
  categorySalesReducer,
  favProductReducer,
  salesNowReducer,
});
