import React from 'react';
import nftImage from './images/image-equilibrium.jpg'; // Adjust the filename as needed
import ethereumIcon from './images/icon-ethereum.svg';
import clockIcon from './images/icon-clock.svg';
import creatorImage from './images/image-avatar.png'; // Adjust the filename as needed

const NftCard = () => {
  return (
    <div className="max-w-xs w-full bg-gray-800 rounded-xl shadow-md overflow-hidden ">
      <div className="bg-gray-900 p-4">
        <img className="w-full" src={nftImage} alt="NFT" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-white">Equilibrium #3429</h2>
        <p className="text-gray-400 mt-1">Our Equilibrium collection promotes balance and calm.</p>
        <div className="mt-4 flex items-center justify-between text-white">
          <span className="flex items-center">
            <img className="w-5 h-5 mr-2" src={ethereumIcon} alt="Ethereum" />
            <span>0.041 ETH</span>
          </span>
          <span className="flex items-center text-gray-400">
            <img className="w-5 h-5 mr-2" src={clockIcon} alt="Clock" />
            3 days left
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <img className="w-6 h-6 rounded-full mr-2" src={creatorImage} alt="Creator" />
          <span className="text-gray-400">Creation of <span className="text-white">Jules Wyvern</span></span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
