'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Product } from './types';
import Navbar from './components/Navbar';

const PRODUCTS_PER_PAGE = 8;

const Home = ({ initialProducts }: { initialProducts: Product[] }) => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<Product[]>(initialProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const productsToShow = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / PRODUCTS_PER_PAGE);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 p-6 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg mt-20 mb-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Products</h1>
        {isPending && <p className="text-gray-500 mb-4">Loading...</p>}
        <ul className="space-y-6">
          {productsToShow.length > 0 ? (
            productsToShow.map(product => (
              <li key={product.id} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name || 'Product image'}
                  width={150}
                  height={150}
                  className="object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                  <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No products available</p>
          )}
        </ul>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Next
          </button>
        </div>
      </main>

      <footer className="bg-teal-800 text-white py-4 text-center">
        <p>&copy; 2024 My Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


