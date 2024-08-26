import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleEdit = () => {
    navigate(`/edit/${product.id}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 float-right">
          &times;
        </button>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-semibold text-slate-800">{product.title}</h2>
        <p className="text-slate-600 mt-2">{product.description}</p>
        <p className="text-slate-800 mt-4 font-bold">${product.price}</p>
        <button
          onClick={handleEdit}
          className="mt-4 w-full px-4 py-2 bg-indigo-600 
          text-white rounded hover:bg-indigo-700"> Edit
        </button>
      </div>
    </div>
  );
};

export default Modal;
