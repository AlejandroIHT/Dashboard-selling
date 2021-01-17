import {
  LOADING_CATEGORY_SALES,
  ERROR_CATEGORY_SALES,
  GET_CATEGORY_SALES,
} from '../types/categorySalesTypes';

const INITIAL_STATE = {
  data: {
    salesForCategory: [],
  },
  loading: false,
  error: null,
};

/** Conect reducer and actions for Category for Sales */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORY_SALES:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_CATEGORY_SALES:
      return { ...state, loading: true, error: null };
    case ERROR_CATEGORY_SALES:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
