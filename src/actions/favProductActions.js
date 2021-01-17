import {
  LOADING_FAV_PRODUCT,
  ERROR_FAV_PRODUCT,
  GET_FAV_PRODUCT,
} from '../types/favProductTypes';
import http from '../libs/http';

/** Take sales for category data (actions)
 * @async
 */
export const fetchFavProductData = () => async (dispatch) => {
  dispatch({ type: LOADING_FAV_PRODUCT });

  try {
    const data = await http.instance.get('http://localhost:3003/initialState');
    dispatch({ type: GET_FAV_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: ERROR_FAV_PRODUCT, payload: error });
  }
};