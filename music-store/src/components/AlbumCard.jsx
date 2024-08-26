import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album, handleDeleteAlbum }) => {
  if (!album || !album.collectionId) {
    return null; 
  }

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">
          {album.collectionName}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {album.artistName}
        </p>
        <Link
          to={`/edit/${album.collectionId}`}
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"> Modifica <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">&rarr;
          </span>
        </Link>
        <div className="mt-4 flex space-x-2">
          <button onClick={() => handleDeleteAlbum(album.collectionId)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Elimina</button>
        </div>
      </div>
    </article>
  );
};

export default AlbumCard;
