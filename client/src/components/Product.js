import React from 'react';

const Product = ({ item }) => {
  let { _id, price, image, description, name } = item;

  const handleClick = (id) => {
    console.log('clicked', id);
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
        <button id={_id} onClick={() => handleClick(_id)}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default Product;
