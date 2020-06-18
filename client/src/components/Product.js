import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/cartAction';

const Product = ({ item }) => {
  let { _id, price, image, description, name } = item;

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <li id={_id}>
        <div>{name} </div>
        <div>
          Price: <span>&#8369;</span>
          {price}
        </div>
        <img src={image} alt={image} />
        <p>{description}</p>
        <button id={_id} onClick={addItemToCart}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default Product;
