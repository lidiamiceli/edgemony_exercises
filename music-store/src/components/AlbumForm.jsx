import React from 'react';

const AlbumForm = ({ formState, handleInputChange, handleAddOrUpdateAlbum }) => (
  <form onSubmit={handleAddOrUpdateAlbum} className="mb-4 border p-4 rounded">
    <input
      type="text"
      name="collectionName"
      placeholder="Nome album"
      value={formState.collectionName}
      onChange={handleInputChange}
      className="border p-2 mb-2 w-full"
      required/>
    <input
      type="text"
      name="artistName"
      placeholder="Nome artista"
      value={formState.artistName}
      onChange={handleInputChange}
      className="border p-2 mb-2 w-full"
      required/>
    <input
      type="text"
      name="artworkUrl100"
      placeholder="URL immagine"
      value={formState.artworkUrl100}
      onChange={handleInputChange}
      className="border p-2 mb-2 w-full"
      required/>
    <input
      type="text"
      name="primaryGenreName"
      placeholder="Genere"
      value={formState.primaryGenreName}
      onChange={handleInputChange}
      className="border p-2 mb-2 w-full"
      required/>
    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
      {formState.id ? 'Aggiorna' : 'Aggiungi'}
    </button>
  </form>
);

export default AlbumForm;
