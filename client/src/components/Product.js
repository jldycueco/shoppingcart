import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartAction';
import { Grid, Button } from 'semantic-ui-react';

const Product = ({ item }) => {
  let { _id, price, image, description, name } = item;

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Grid.Column id={_id}>
        <div>{name} </div>
        <div>
          Price: <span>&#8369;</span>
          {price}
        </div>
        <img src={image} alt={image} />
        <p>{description}</p>
        <Button id={_id} onClick={addItemToCart}>
          Add to Cart
        </Button>
      </Grid.Column>
    </>
  );
};

export default Product;
