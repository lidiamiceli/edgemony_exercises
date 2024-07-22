import React from 'react';

const AlbumList = ({ albums, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {albums.map(album => (
        <div 
          key={album.collectionId} 
          className="mb-4 p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-lg font-semibold mb-2">{album.collectionName}</h2>
          <img 
            src={album.artworkUrl100} 
            alt={album.collectionName} 
            className="w-full h-32 object-cover rounded-md mb-4" 
          />
          <p className="text-sm mb-1">Artista: {album.artistName}</p>
          <p className="text-sm mb-1">Genere: {album.primaryGenreName}</p>
          <p className="text-sm mb-4">Data di rilascio: {new Date(album.releaseDate).toLocaleDateString()}</p>
          <button 
            className="text-blue-500 hover:underline" 
            onClick={() => onSelect(album)}
          >
            Vedi Dettagli
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
