import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AlbumPage from './components/AlbumPage';
import AlbumFormPage from './components/AlbumFormPage';
import SettingsPage from './components/SettingsPage';
import NavBar from './components/NavBar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumPage />} />
        <Route path="/edit/:id" element={<AlbumFormPage />} />
        <Route path="/edit" element={<AlbumFormPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

