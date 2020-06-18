import {
  FETCH_ORDERS,
  CLEAR_ORDER,
  CREATE_ORDER,
} from '../action/type';
import axios from 'axios';

export const fetchOrders = () => async (dispatch) => {
  const { data } = await axios.get('/api/order');
  
  dispatch({
    type: FETCH_ORDERS,
    payload: data.data,
  });
};

export const clearOrders = () => (dispatch) => {
  dispatch({
    type: CLEAR_ORDER,
  });
};

export const createOrder = (order) => async (dispatch) => {
  const { data } = await axios.post('/api/order', order);

  dispatch({
    type: CREATE_ORDER,
    payload: data.data,
  });
};
