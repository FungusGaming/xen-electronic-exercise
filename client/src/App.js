import React from 'react';
// import { Counter } from './features/counter/Counter';
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import ProductList from './pages/ProductList';
import CartList from './pages/CartList';
import { ctaMessage } from './features/message/messageSlice';
import CtaMessage from './components/CtaMessage';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  const ctaMessageObj = useSelector(ctaMessage)
  return (
    <div className="app flex-column">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      { ctaMessageObj.isShowMessage && <CtaMessage content={ctaMessageObj.content}/>}
    </div>
  );
}

export default App;
