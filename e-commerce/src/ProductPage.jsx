import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Errore nella fetch:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl text-center mb-6 font-kumbh">{product.title}</h1>
      <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <p>Prezzo: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
