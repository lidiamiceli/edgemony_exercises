import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbumDetail } from '../api/albumClient'; 
import SkeletonLoader from './SkeletonLoader';
import ErrorComponent from './ErrorComponent';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });

  useEffect(() => {
    const fetchAndSetAlbum = async () => {
      setIsLoading(true);
      setIsError({ message: "", isError: false });
      try {
        const data = await fetchAlbumDetail(id);
        setAlbum(data);
      } catch (error) {
        console.error('Errore nella fetch:', error);
        setIsError({ message: error.message, isError: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetAlbum();
  }, [id]);

  if (isError.isError) return <ErrorComponent message={isError.message} />;
  if (isLoading) return <SkeletonLoader />;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 text-center">Dettagli Album</h1>
      {album && (
        <div className="border p-4 rounded shadow w-64">
          <img src={album.artworkUrl100} alt={album.collectionName} className="mb-2 w-64 h-auto" />
          <h2 className="text-xl font-semibold">{album.collectionName}</h2>
          <p className="text-gray-700">Artista: {album.artistName}</p>
          <p className="text-gray-700">Genere: {album.primaryGenreName}</p>
          <p className="text-gray-700">Data di rilascio: {album.releaseDate}</p>
          <p className="mt-2 text-gray-800">{album.collectionDescription}</p>
        </div>
      )}
    </div>
  );
};

export default AlbumDetail;


