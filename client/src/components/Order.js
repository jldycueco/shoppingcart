import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/action/orderAction';

const OrdersList = () => {
  const dispatch = useDispatch();

  const { order } = useSelector(state => state.order);

  useEffect(()=> {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <div>My Orders</div>
      {order.map(order => {
        let { _id, name, cartItems } = order
        return (
          <div key ={_id}>
            <div>{_id}</div>
            <div>{name}</div>
            {cartItems.map(item => {
              let {price, name, count, _id} = item;
              return (
                <div key={_id}>
                  <div>{count} x {name} at {price}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  );
}
 
export default OrdersList;