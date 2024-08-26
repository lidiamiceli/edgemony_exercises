import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 p-4 md:p-8 shadow-lg">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-50">STORE</h1>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-zinc-50">
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 md:items-center ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static bg-slate-800 
        md:bg-transparent w-full md:w-auto top-16 md:top-auto left-0 md:left-auto p-4 md:p-0`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                setCurrentPage('home');
                setIsMenuOpen(false);
              }}
              className={`text-zinc-50 font-regular hover:text-slate-50 transition-colors duration-300 
              ${currentPage === 'home' ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => {
                setCurrentPage('products');
                setIsMenuOpen(false);
              }}
              className={`text-zinc-50 font-regular hover:text-slate-50 transition-colors duration-300 
              ${currentPage === 'products' ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              onClick={() => {
                setCurrentPage('create');
                setIsMenuOpen(false);
              }}
              className={`text-zinc-50 font-regular hover:text-slate-50 transition-colors duration-300 
              ${currentPage === 'create' ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              onClick={() => {
                setCurrentPage('settings');
                setIsMenuOpen(false);
              }}
              className={`text-zinc-50 font-regular hover:text-slate-50 transition-colors duration-300 
              ${currentPage === 'settings' ? 'border-b-2 border-yellow-400' : ''}`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
