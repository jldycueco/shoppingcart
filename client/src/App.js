import React from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import OrdersList from './components/Order';

function App() {
  const history = useHistory();

  return (
    <>
      <Navbar history={history}/>
      <Switch>
        <Route exact path="/">
          <Cart />
          <Filter />
          <ProductsList />
        </Route>
        <Route exact path='/order'>
          <OrdersList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
