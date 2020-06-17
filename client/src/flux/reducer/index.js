import { combineReducers } from 'redux';
import productReducer from '../reducer/productReducer';

export default combineReducers({
  product: productReducer,
});
