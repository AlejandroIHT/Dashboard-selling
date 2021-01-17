import {
  LOADING_FAV_PRODUCT,
  ERROR_FAV_PRODUCT,
  GET_FAV_PRODUCT,
} from '../types/favProductTypes';

const INITIAL_STATE = {
  data: {
    productFav: [],
  },
  loading: false,
  error: null,
};

/** Conect reducer and actions for Category for Sales */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FAV_PRODUCT:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_FAV_PRODUCT:
      return { ...state, loading: true, error: null };
    case ERROR_FAV_PRODUCT:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};