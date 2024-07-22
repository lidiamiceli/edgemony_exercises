import React from 'react';
import logo from './vibes.png';

const NavBar = ({ setCurrentPage, currentPage }) => {
  const getButtonClass = (page) => `px-4 py-2 ${currentPage === page ? 'bg-gray-700' : 'bg-zinc-900'}`;

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Vibes Logo" className="w-24 h-auto" />

        {/* Navigazione */}
        <div className="text-white flex gap-x-4">
          <button className={getButtonClass('home')} onClick={() => setCurrentPage('home')} aria-label="Go to Home page">Home</button>
          <button className={getButtonClass('album')} onClick={() => setCurrentPage('album')} aria-label="Go to Albums page">Albums</button>
          <button className={getButtonClass('settings')} onClick={() => setCurrentPage('settings')} aria-label="Go to Settings page">Impostazioni</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
