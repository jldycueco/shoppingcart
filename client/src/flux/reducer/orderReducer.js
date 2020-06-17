import {
  FETCH_ORDERS,
  CREATE_ORDER,
  CLEAR_ORDER,
} from '../action/type';

const initialState = {
  order: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        order: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: null,
      };
    default:
      return state;
  }
};

export default orderReducer;
