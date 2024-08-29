"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!product) return <p className="text-center text-white">Product not found</p>;

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full object-contain rounded-lg shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
        <p className="text-gray-300 text-xl mb-2">${product.price}</p>
        <p className="text-gray-200 text-lg">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
