import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="p-6 mt-8">
      <h1 className="text-2xl mb-4 text-center">Carrello</h1>
      {cart.length === 0 ? (
        <p className='text-center'>Il carrello è vuoto.</p>
      ) : (
        <div>
          {cart.map(product => {
            console.log('Product:', product);
            return (
              <div key={product.id} className="mb-4 p-4 border w-1/4 border p-4 rounded-custom bg-gray-100">
                <h2 className="text-lg">{product.title}</h2>
                <img src={product.images && product.images.length > 0 ? product.images[0] : ''} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <p>Prezzo: ${product.price}</p>
                <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-400" onClick={() => removeFromCart(product.id)}>Rimuovi</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
  
};

export default CartPage;
