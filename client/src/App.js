import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Filter />
          <ProductsList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
