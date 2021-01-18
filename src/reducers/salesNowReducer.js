import {
  LOADING_SALES_NOW,
  ERROR_SALES_NOW,
  GET_SALES_NOW,
} from '../types/salesNowTypes';

const INITIAL_STATE = {
  data: {
    products: [],
  },
  loading: false,
  error: null,
};

/** Conect reducer and actions for Category for Sales */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SALES_NOW:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_SALES_NOW:
      return { ...state, loading: true, error: null };
    case ERROR_SALES_NOW:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};