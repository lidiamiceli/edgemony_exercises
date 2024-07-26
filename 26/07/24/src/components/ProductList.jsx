import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductList = ({ products, isLoading, handleDelete }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value.toLowerCase());
  };

  if (isLoading) return <p className="text-center py-4">Loading...</p>;

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(filterTitle))
    .filter(product => !filterCategory || product.category.toLowerCase() === filterCategory);

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-slate-100 min-h-screen">
      <main className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        <div className="p-4 mb-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Products</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex flex-col gap-4">
              <label className="text-lg font-medium text-gray-800" htmlFor="filter-title">Filter by name</label>
              <input
                id="filter-title"
                className="border border-gray-300 p-2 rounded w-full md:w-64"
                type="text"
                value={filterTitle}
                placeholder="Insert name of product"
                onChange={handleTitleChange}
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-lg font-medium text-gray-800" htmlFor="filter-category">Filter by category</label>
              <select
                id="filter-category"
                className="border border-gray-300 p-2 rounded w-full md:w-64"
                value={filterCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All categories</option>
                {Array.from(new Set(products.map(p => p.category))).map(category => (
                  <option key={category} value={category.toLowerCase()}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-4 py-2 font-medium text-gray-900">Name</th>
                <th className="px-4 py-2 font-medium text-gray-900">Description</th>
                <th className="px-4 py-2 font-medium text-gray-900">Price</th>
                <th className="px-4 py-2 font-medium text-gray-900">Category</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map(product => (
                <tr key={product.id}>
                  <td className="px-4 py-2 font-medium text-gray-900">{product.title}</td>
                  <td className="px-4 py-2 text-gray-700 truncate" style={{ maxWidth: '150px' }}>
                    {product.description}
                  </td>
                  <td className="px-4 py-2 text-gray-700">${product.price}</td>
                  <td className="px-4 py-2 text-gray-700">{product.category}</td>
                  <td className="px-4 py-2 flex gap-2 flex-wrap">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-block rounded bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 transition duration-300"
                    >
                      Details
                    </Link>
                    
                    <Link
                      to={`/edit/${product.id}`}
                      className="inline-block rounded bg-green-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-green-700 transition duration-300"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="inline-block rounded bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="block mx-auto px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 mt-6"
          onClick={() => navigate(+1)}
        >
          Next
        </button>
      </main>
    </div>
  );
};

export default ProductList;
