import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  removeCart,
} from '../redux/action/cartAction';
import { createOrder } from '../redux/action/orderAction';
import { Button, Icon, List, Container } from 'semantic-ui-react';
import ModalComponent from './Modal';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const handleCreateOrder = () => {
    dispatch(createOrder(order));
    setShowModal(!showModal);
    dispatch(removeCart());
  };

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

  return (
    <>
      <Container>
        {cartItems.length === 0 ? (
          <div>Shopping Cart is empty</div>
        ) : (
          <>
            <div>You have {cartItems.length} items in Cart</div>
            <List>
              {cartItems.map((item) => (
                <List.Item key={item._id}>
                  {item.count} x {item.name} at <span>&#8369;</span>
                  {item.price}
                  <Button
                    icon
                    onClick={() => removeItemFromCart(item)}
                  >
                    <Icon name="delete" />
                  </Button>
                </List.Item>
              ))}
            </List>
            <div>Total: {totalPrice}</div>
            <Button onClick={handleCreateOrder}>Order</Button>
          </>
        )}
        {showModal && (
          <ModalComponent
            showModal={showModal}
            closeModal={closeModal}
          />
        )}
      </Container>
    </>
  );
};

export default Cart;
