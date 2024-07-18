import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-kumbh">{product.title}</h2>
      <p>Prezzo: ${product.price}</p>
      <div className="flex justify-center mt-8">
        <button
          className="bg-green-500 text-white px-6 py-2 font-kumbh rounded-custom hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transform hover:scale-105 shadow hover:shadow-lg"
          onClick={() => addToCart(product)}
        >
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

