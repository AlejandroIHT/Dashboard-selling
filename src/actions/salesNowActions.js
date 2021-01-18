import {
  LOADING_SALES_NOW,
  ERROR_SALES_NOW,
  GET_SALES_NOW,
} from '../types/salesNowTypes';
import http from '../libs/http';

/** Take sales now data (actions)
 * @async
 */
export const fetchSalesNowData = () => async (dispatch) => {
  dispatch({ type: LOADING_SALES_NOW });

  try {
    const data = await http.instance.get('http://localhost:3004/initialState');
    dispatch({ type: GET_SALES_NOW, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_SALES_NOW, payload: error });
  }
};