import {
  LOADING_SALES_FOR_MONTH,
  ERROR_SALES_FOR_MONTH,
  GET_SALES_FOR_MONTH,
} from '../types/salesForMonthTypes';
import http from '../libs/http';

/** Take sales for month data (actions)
 * @async
 */
export const fetchSalesForMonthData = () => async (dispatch) => {
  dispatch({ type: LOADING_SALES_FOR_MONTH });

  try {
    const data = await http.instance.get('http://localhost:3001/initialState');
    dispatch({ type: GET_SALES_FOR_MONTH, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_SALES_FOR_MONTH, payload: error });
  }
};
