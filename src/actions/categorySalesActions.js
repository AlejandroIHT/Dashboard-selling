import {
  LOADING_CATEGORY_SALES,
  ERROR_CATEGORY_SALES,
  GET_CATEGORY_SALES,
} from '../types/categorySalesTypes';
import http from '../libs/http';

/** Take sales for category data (actions)
 * @async
 */
export const fetchcategorySalesData = () => async (dispatch) => {
  dispatch({ type: LOADING_CATEGORY_SALES });

  try {
    const data = await http.instance.get('http://localhost:3002/initialState');
    dispatch({ type: GET_CATEGORY_SALES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_CATEGORY_SALES, payload: error });
  }
};