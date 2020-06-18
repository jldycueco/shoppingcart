import { GET_PRODUCTS, FILTER_PRODUCTS, SORT_PRODUCTS } from './type';
import axios from 'axios';

export const fetchProducts = async (dispatch) => {
  const { data } = await axios.get('/api/product');
  dispatch({
    type: GET_PRODUCTS,
    payload: data.data,
  });
};

export const filterProducts = (products, brand) => (dispatch) => {
  const filteredProducts =
    brand === 'All'
      ? products
      : products.filter((product) => product.brand === brand);

  dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      brand,
      data: filteredProducts,
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (
  dispatch,
) => {
  const sortedProducts = filteredProducts.slice();

  if (sort === 'Latest') {
    sortedProducts.sort((a, b) =>
      a.createdDate > b._createdDate ? 1 : -1,
    );
  } else {
    sortedProducts.sort((a, b) =>
      sort === 'Lowest'
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1,
    );
  }

  dispatch({
    type: SORT_PRODUCTS,
    payload: {
      sort,
      data: sortedProducts,
    },
  });
};
