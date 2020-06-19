import React from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Navbar from './components/Navbar';
import OrdersList from './components/Order';
import CartItems from './pages/CartItems';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Navbar history={history} />
      <Switch>
        <Route exact path="/">
          <ProductsList />
        </Route>
        <Route exact path="/order">
          <OrdersList />
        </Route>
        <Route path="/cart">
          <CartItems />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
