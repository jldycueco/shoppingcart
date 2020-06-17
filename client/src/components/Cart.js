import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../flux/action/cartAction';
import { createOrder } from '../flux/action/orderAction';

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const removeItemFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const totalPrice = cartItems.reduce(
    (a, c) => a + c.price * c.count,
    0,
  );

  const order = {
    name: 'JDD',
    email: 'jdd@gmail.com',
    address: 'test address',
    total: totalPrice,
    cartItems: cartItems,
  };

  const handleCreateOrder = () => {
    dispatch(createOrder(order));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div>Shopping Cart is empty</div>
      ) : (
        <>
          <div>You have {cartItems.length} items in Cart</div>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  {item.name} - {item.price}
                </div>
                <button onClick={() => removeItemFromCart(item)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>Total: {totalPrice}</div>
          <button onClick={handleCreateOrder}>Order</button>
        </>
      )}
    </>
  );
};

export default Cart;
