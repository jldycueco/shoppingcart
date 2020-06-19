import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_CART } from './type';

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let itemExists = false;

  cartItems.forEach((item) => {
    if (item._id === product._id) {
      itemExists = true;
      item.count++;
    }
  });

  if (!itemExists) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: cartItems,
  });

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((item) => item._id !== product._id);

  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItems,
  });

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const removeCart = () => (dispatch) => {
  dispatch({
    type: REMOVE_CART,
    payload: [],
  });

  localStorage.removeItem('cartItems');
};
