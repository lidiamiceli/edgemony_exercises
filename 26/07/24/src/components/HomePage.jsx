import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/productsClient';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        setFilteredProducts(products);

        const categories = ['All', ...new Set(products.map(product => product.category))];
        setCategories(categories);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  if (isLoading) return <p className="text-center py-4">Loading...</p>;
  if (isError) return <p className="text-center py-4 text-red-600">Error loading products</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-0">
      <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507214617719-4a3daf41b9ac?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, minHeight: '50vh' }}>
        <div className="w-full h-[50vh] bg-gray-300 bg-opacity-45 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Our Products</h2>
          
          <div className="mt-4 text-center">
            <label htmlFor="category" className="block text-slate-800 font-semibold mb-2">Filter by category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="p-2 rounded bg-white shadow"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8 bg-slate-200">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={() => openModal(product)}
          >
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-800">{product.title}</h3>
              <p className="text-slate-600 mt-2">{product.description}</p>
              <p className="text-slate-800 mt-4 font-bold">${product.price}</p>
              <button
            onClick={(e) => {
            e.stopPropagation(); 
            navigate(`/edit/${product.id}`);
            }} className="mt-4 mx-auto block px-3 py-1.5  bg-indigo-600 text-white text-s 
            font-regular rounded hover:bg-indigo-700 transition duration-300">Edit
        </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default HomePage;
