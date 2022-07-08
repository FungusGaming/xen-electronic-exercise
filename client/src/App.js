import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import ProductList from './pages/ProductList';
import CartList from './pages/CartList';

function App() {
  return (
    <div className="app flex-column">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
