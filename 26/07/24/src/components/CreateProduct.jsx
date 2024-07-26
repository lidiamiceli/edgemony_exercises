import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';

const CreateProduct = ({ addProduct }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category || !image) {
      toast.error('Please fill in all fields.');
      return;
    }

    const newProduct = {
      id: Date.now(), 
      title,
      description,
      price: parseFloat(price),
      category,
      image,
    };

    addProduct(newProduct);

    toast.success('Product created successfully!');
    setTimeout(() => navigate('/products'), 1500);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-0">
      <div 
        className="w-full bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1507214617719-4a3daf41b9ac?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
          minHeight: '50vh' 
        }}
      >
        <div className="w-full h-[50vh] bg-gray-300 bg-opacity-45 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Add Product</h2>
        </div>
      </div>

      <main className="w-full max-w-xl bg-white shadow-lg rounded-lg p-9 mt-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-base font-medium text-gray-800" htmlFor="title">Title</label>
            <input
              id="title"
              className="border border-gray-300 p-1.5 rounded w-full"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-800" htmlFor="description">Description</label>
            <input
              id="description"
              className="border border-gray-300 p-1.5 rounded w-full"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-800" htmlFor="price">Price</label>
            <input
              id="price"
              className="border border-gray-300 p-1.5 rounded w-full"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-800" htmlFor="category">Category</label>
            <input
              id="category"
              className="border border-gray-300 p-1.5 rounded w-full"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-800" htmlFor="image">Image URL</label>
            <input
              id="image"
              className="border border-gray-300 p-1.5 rounded w-full"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full px-3 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
          >
            Create Product
          </button>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </div>
  );
};

export default CreateProduct;
