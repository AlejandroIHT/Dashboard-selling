import {
  LOADING_MAINDATA,
  ERROR_MAINDATA,
  GET_MAINDATA,
} from '../types/mainDataTypes';

const INITIAL_STATE = {
  mainData: {
    product: [],
  },
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MAINDATA:
      return {
        ...state,
        mainData: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_MAINDATA:
      return { ...state, loading: true, error: null };
    case ERROR_MAINDATA:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
