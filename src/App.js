import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import CartList from './CartList';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <CartList />
      </CartProvider>
    </div>
  );
}

export default App;
