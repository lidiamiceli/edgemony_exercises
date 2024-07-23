import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import AlbumDetail from './components/AlbumDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <Router>
      <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

