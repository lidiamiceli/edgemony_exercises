import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductPage from './ProductPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="p-9 bg-gray-400 text-white font-kumbh flex justify-center gap-9">
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/abbigliamento">Abbigliamento</Link>
          <Link className="mr-4" to="/calzature">Calzature</Link>
          <Link className="mr-4" to="/hi-tech">Hi-Tech</Link>
          <Link className="mr-4" to="/accessori">Accessori</Link>
          <Link to="/cart">Carrello</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

