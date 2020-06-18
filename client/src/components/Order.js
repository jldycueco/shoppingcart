import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/action/orderAction';

const OrdersList = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector(state => state.cart);

  useEffect(()=> {
    dispatch(fetchOrders());
  }, [dispatch])

  return (
    <>
      <div>My Orders</div>
      <ul>

      </ul>
      {cartItems.map(item => {
        let {price, count, name, _id} = item;
        return (
          <li key = {_id}>
            <div>id: {_id}</div>
            <div>{count} x {name} at {price}</div>
          </li>
        )
        
      })}
    </>
  );
}
 
export default OrdersList;