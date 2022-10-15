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
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ProductForm from './pages/ProductForm';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/products/:method/" element={<ProductForm />} />
          <Route path="/products/:method/:id" element={<ProductForm />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      { ctaMessageObj.isShowMessage && <CtaMessage content={ctaMessageObj.content}/>}
    </div>
  );
}

export default App;
