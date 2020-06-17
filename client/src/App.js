import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Filter from './components/Filter';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Cart />
          <Filter />
          <ProductsList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
