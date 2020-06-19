import React, { useEffect } from 'react';
import Product from '../components/Product';
import { fetchProducts } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import { Grid } from 'semantic-ui-react';

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.displayData);

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <>
      <Filter />
      <Grid container stackable columns={3}>
        {products.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
