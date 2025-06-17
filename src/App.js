import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Header from './Header';

function App() {
  const [cartItems, setCartItems] = useState([]);
const [message, setMessage] = useState('');

 const addToCart = (product) => {
  setCartItems(prev => [...prev, product]);
  setMessage(`${product.name} added to cart`);

  setTimeout(() => {
    setMessage('');
  }, 2000); // Hide after 2 sec
};

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Header/>
              {message && <div className="popup">{message}</div>}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/checkout" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
