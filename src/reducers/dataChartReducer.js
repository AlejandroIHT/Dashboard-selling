import {
  LOADING_DATACHART,
  ERROR_DATACHART,
  GET_DATACHART,
} from '../types/dataChartTypes';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATACHART:
      return { ...state, data: action.payload, loading: false, error: null };
    case LOADING_DATACHART:
      return { ...state, loading: true, error: null };
    case ERROR_DATACHART:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
