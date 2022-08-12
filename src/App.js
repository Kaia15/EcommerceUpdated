import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import Product from './pages/product/product';
import {items} from '../src/data/list'
import { useReducer } from 'react';
import reducer, { initState } from './pages/cart/reducer/reducer';
import { addItem, setItem } from './pages/cart/actions/actions';
import A from '../src/pages/cart/index'

function App() {
  
  return (
    <div className="App">
      <A />
    </div>
  );
}

export default App;
