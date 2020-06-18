import {
  GET_PRODUCTS,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from '../action/type';

const initialState = {
  data: [],
  brand: 'All',
  sort: 'Latest',
  displayData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        displayData: action.payload,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload.sort,
        displayData: action.payload.data,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        brand: action.payload.brand,
        displayData: action.payload.data,
      };
    default: {
      return state;
    }
  }
};
