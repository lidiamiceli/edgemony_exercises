import React from 'react';
import NftCard from './NftCard';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-very-dark-blue-main-bg">
      <div className="bg-darker-blue p-6 rounded-2xl">
      <NftCard />
      </div>
    </div>
  );
}

export default App;
