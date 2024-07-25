import React, { useState, useEffect } from 'react';
import { fetchAlbums, deleteAlbum, getLocalAlbums } from '../api/albumClient';
import SkeletonLoader from './SkeletonLoader';
import ErrorComponent from './ErrorComponent';
import AlbumCard from './AlbumCard';
import { Link } from 'react-router-dom';

const AlbumPage = () => {
  const [albums, setAlbums] = useState([]);
  const [filter, setFilter] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      setIsLoading(true);
      setIsError({ message: "", isError: false });
      try {
        const data = await fetchAlbums('Rap');
        setAlbums([...data, ...getLocalAlbums()]);
      } catch (error) {
        console.error('Errore nella fetch:', error);
        setIsError({ message: error.message, isError: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetAlbums();
  }, []);

  const handleDeleteAlbum = async (id) => {
    setIsLoading(true);
    try {
      await deleteAlbum(id);
      const data = await fetchAlbums('Rap');
      setAlbums([...data, ...getLocalAlbums()]);
    } catch (error) {
      console.error('Errore nella fetch:', error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredAlbums = albums.filter(album =>
    album.collectionName.toLowerCase().includes(filter.toLowerCase()) &&
    (genre ? album.primaryGenreName.toLowerCase() === genre.toLowerCase() : true)
  );

  if (isError.isError) return <ErrorComponent message={isError.message} />;

  return (
    <div className="p-8 rounded shadow-lg">
      <h1 className="text-2xl mb-4 text-center">Album</h1>

      <Link to="/edit" className="m-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"> Edit
      </Link>

      <input
        type="text"
        placeholder="Filtra per nome album"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mr-2 mt-2"
      />

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border p-2 mt-2"
      >
        <option value="">Tutti i generi</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Hip-Hop">Hip-Hop</option>
        <option value="Reggae">Reggae</option>
        <option value="Electronic">Electronic</option>
        <option value="Rap">Rap</option>
        <option value="R&B">R&B</option>
      </select>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map(album => (
              <AlbumCard 
                key={album.collectionId} 
                album={album} 
                handleDeleteAlbum={handleDeleteAlbum} 
              />
            ))
          ) : (
            <p>Nessun album trovato.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AlbumPage;

