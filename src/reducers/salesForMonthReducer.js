import {
  LOADING_SALES_FOR_MONTH,
  ERROR_SALES_FOR_MONTH,
  GET_SALES_FOR_MONTH,
} from '../types/salesForMonthTypes';

const INITIAL_STATE = {
  data: {
    salesForMonth: [],
  },
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SALES_FOR_MONTH:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_SALES_FOR_MONTH:
      return { ...state, loading: true, error: null };
    case ERROR_SALES_FOR_MONTH:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
