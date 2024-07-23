import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './vibes.png';

const NavBar = ({ setCurrentPage, currentPage }) => {

  const getClassName = (page) => `px-4 py-2 ${currentPage === page ? 'bg-gray-700' : 'bg-zinc-900'}`;

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="Vibes Logo" className="w-24 h-auto" />

        <div className="text-white flex gap-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => getClassName('home') + (isActive ? ' bg-gray-700' : '')}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </NavLink>

          <NavLink
            to="/albums"
            className={({ isActive }) => getClassName('album') + (isActive ? ' bg-gray-700' : '')}
            onClick={() => setCurrentPage('album')}
          >
            Albums
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => getClassName('settings') + (isActive ? ' bg-gray-700' : '')}
            onClick={() => setCurrentPage('settings')}
          >
            Impostazioni
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
