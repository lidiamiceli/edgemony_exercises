import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductDetail, editProduct } from '../api/productsClient';
import ProductForm from '../components/ProductForm';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState({ message: '', isError: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductDetail(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
        setIsError({ message: 'Failed to fetch product. Please try again later.', isError: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (updatedProduct) => {
    try {
      await editProduct(id, updatedProduct);
      navigate(`/products/${id}`);
    } catch (error) {
      console.error('Failed to update product:', error);
      setIsError({ message: 'Failed to update product. Please try again later.', isError: true });
    }
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">Edit Product</h1>
        </div>
        
        <p className="mx-auto mt-4 max-w-md text-center text-slate-600">Modify the details of the product</p>
        {product && <ProductForm value={{...product, id}} onSubmit={handleSubmit} />}
        
        {isError.isError && (
          <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4 mt-4">
            <strong className="block font-medium text-red-800">Something went wrong</strong>
            <p className="mt-2 text-sm text-red-700">{isError.message}</p>
          </div>
        )}
        
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => navigate(`/products/${id}`)}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition duration-300"
          >
            Back to Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
