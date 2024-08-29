import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-800 fixed top-0 left-0 w-full z-20 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     
        <div className="flex items-center space-x-4">
          <span className="text-white text-2xl font-bold">ShopGest</span>
        </div>
        

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-teal-300">Home</Link>
          <Link href="/dashboard" className="text-white hover:text-teal-300">Dashboard</Link>
          <Link href="/settings" className="text-white hover:text-teal-300">Settings</Link>
        </div>


        <div className="relative">
          <button className="text-white flex items-center space-x-2">
            <span>Admin</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
