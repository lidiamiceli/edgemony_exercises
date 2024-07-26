import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Errore nella fetch:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

  if (isError) return <p className="text-center text-red-500">Something went wrong. Please try again.</p>;

  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="p-9 bg-white shadow-md rounded-lg max-w-xs mx-auto mt-10">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h1 className="text-xl font-bold mb-2 text-gray-800">{product.title}</h1>
        <p className="text-base mb-1 text-gray-700">{product.description}</p>
        <p className="text-base font-semibold mb-2 text-gray-800">Price: ${product.price}</p>
        <p className="text-base mb-4 text-gray-700">Category: {product.category}</p>

        <div className="flex gap-1 justify-center">
          <Link
            to={`/edit/${product.id}`}
            className="inline-block px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 text-sm"
          >
            Edit
          </Link>
          <button
            onClick={() => navigate('/products')}
            className="inline-block px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 text-sm"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

