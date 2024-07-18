import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error('Errore nella fetch:', error));
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-center mb-6 font-kumbh">New In</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-kumbh">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
