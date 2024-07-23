import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './vibes.png';

const NavBar = ({ setCurrentPage, currentPage }) => {

  const getClassName = (page) => `px-4 py-2 ${currentPage === page ? 'bg-gray-700 text-white' : 'bg-zinc-900 text-white'}`;

  return (
    <header className="bg-zinc-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src={logo} alt="Vibes Logo" className="w-24 h-auto" />

        <nav className="hidden md:flex md:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => getClassName('home') + (isActive ? ' bg-gray-700 text-white' : ' text-white')}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </NavLink>

          <NavLink
            to="/albums"
            className={({ isActive }) => getClassName('album') + (isActive ? ' bg-gray-700 text-white' : ' text-white')}
            onClick={() => setCurrentPage('album')}
          >
            Albums
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => getClassName('settings') + (isActive ? ' bg-gray-700 text-white' : ' text-white')}
            onClick={() => setCurrentPage('settings')}
          >
            Impostazioni
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
          >
            Login
          </a>

          <a
            href="#"
            className="hidden md:block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
          >
            Register
          </a>

          <button className="md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
