import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const ProductModal = ({ product, closeModal }) => {
  return createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-kumbh">{product.title}</h2>
        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <p>Prezzo: ${product.price}</p>
        <Link to={`/product/${product.id}`} className="text-blue-500 mb-4 inline-block">Vedi Dettagli</Link>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Chiudi
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ProductModal;

