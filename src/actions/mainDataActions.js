import {
  LOADING_MAINDATA,
  ERROR_MAINDATA,
  GET_MAINDATA,
} from '../types/mainDataTypes';
import http from '../libs/http';

/** Take chart data
 * @async
 */
export const fetchMainData = () => async (dispatch) => {
  dispatch({ type: LOADING_MAINDATA });

  try {
    const data = await http.instance.get('http://localhost:3000/initialState');
    dispatch({ type: GET_MAINDATA, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_MAINDATA, payload: error });
  }
};
