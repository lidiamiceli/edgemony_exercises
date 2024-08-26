import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';
import SettingsPage from './components/SettingsPage';
import CreateProduct from './components/CreateProduct';
import NavBar from './components/NavBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Errore nella fetch:', error);
        toast.error('Failed to fetch products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    toast.success('Product added successfully!');
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
      });

      setProducts(products.filter(product => product.id !== id));
      toast.success('Product deleted successfully!', {
        style: {
          backgroundColor: '#4CAF50', 
          color: 'white',
          borderRadius: '8px',
        },
        icon: '✔️', 
      });
    } catch (error) {
      console.error('Errore nella cancellazione:', error);
      toast.error('Failed to delete product: ' + error.message, {
        style: {
          backgroundColor: '#F44336',
          color: 'white',
          borderRadius: '8px',
        },
        icon: '❌', 
      });
    }
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/products" 
          element={<ProductList products={products} isLoading={isLoading} handleDelete={handleDelete} />} 
        />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/create" element={<CreateProduct addProduct={addProduct} />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <ToastContainer /> {/* Aggiungi ToastContainer qui */}
    </Router>
  );
};

export default App;
