import React, { useEffect } from 'react';
import Product from '../components/Product';
import { fetchProducts } from '../flux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.displayData);

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <>
      <ul>
        {products.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
