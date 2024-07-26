import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductCard;
