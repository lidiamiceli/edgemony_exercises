import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;

