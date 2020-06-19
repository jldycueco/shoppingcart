import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/action/orderAction';
import { Container, Table, List } from 'semantic-ui-react';

const OrdersList = () => {
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log(order);

  return (
    <>
      <Container>
        <div>My Orders</div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order id</Table.HeaderCell>
              <Table.HeaderCell>Buyer</Table.HeaderCell>
              <Table.HeaderCell>Items Bought</Table.HeaderCell>
              <Table.HeaderCell>Total Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {order.map((order) => {
              let { _id, name, cartItems, total } = order;
              return (
                <Table.Row key={_id}>
                  <Table.Cell>{_id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>
                    <List>
                      {cartItems.map((item) => {
                        let { price, name, count, _id } = item;
                        return (
                          <List.Item key={_id}>
                            {count} x {name} at <span>&#8369;</span>
                            {price}
                          </List.Item>
                        );
                      })}
                    </List>
                  </Table.Cell>
                  <Table.Cell>
                    <span>&#8369;</span>
                    {total}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default OrdersList;
