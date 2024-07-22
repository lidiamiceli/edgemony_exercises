
import React from 'react';

const AlbumDetail = ({ album, onBack }) => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <button onClick={onBack} className="text-blue-500 mb-4">Indietro</button>
      <h1 className="text-xl mb-3">{album.collectionName}</h1>
      <img 
        src={album.artworkUrl100} 
        alt={album.collectionName} 
        className="w-full h-32 object-cover rounded-md mb-4" 
      />
      <h2 className="text-md mb-2">{album.artistName}</h2>
      <p className="text-sm mb-1">Genere: {album.primaryGenreName}</p>
      <p className="text-sm">Data di rilascio: {new Date(album.releaseDate).toLocaleDateString()}</p>
    </div>
  );
};

export default AlbumDetail;
