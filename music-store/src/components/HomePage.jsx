import React, { useState, useEffect } from 'react';
import { fetchAlbums } from '../api/albumClient';
import SkeletonLoader from './SkeletonLoader';
import ErrorComponent from './ErrorComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [filter, setFilter] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [searchTerm, setSearchTerm] = useState('rock'); // Default search term

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      setIsLoading(true);
      setIsError({ message: "", isError: false });
      try {
        const data = await fetchAlbums(searchTerm);
        setAlbums(data);
      } catch (error) {
        console.error('Errore nella fetch:', error);
        setIsError({ message: error.message, isError: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetAlbums();
  }, [searchTerm]);

  const searchAlbums = (term) => {
    setSearchTerm(term);
  };

  const filteredAlbums = albums.filter(album =>
    album.collectionName.toLowerCase().includes(filter.toLowerCase()) &&
    (genre ? album.primaryGenreName.toLowerCase() === genre.toLowerCase() : true)
  );

  if (isError.isError) return <ErrorComponent message={isError.message} />;

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 text-center">Vibes Album Store</h1>

      <div className="mb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchAlbums(searchTerm);
          }}
        >
          <input
            type="text"
            placeholder="Cerca album"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 mr-2"
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Cerca
          </button>
        </form>

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
      </div>

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-5">
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map(album => (
              <div key={album.collectionId} className="border p-4 rounded shadow rounded-md w-full m-5">
                <img src={album.artworkUrl100} alt={album.collectionName} className="mb-2 w-full h-auto" />
                <h2 className="text-xl font-semibold text-black">{album.collectionName}</h2>
                <p className="text-gray-700">{album.artistName}</p>
                <Link
                  to={`/album/${album.collectionId}`}
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Vedi Dettagli
                </Link>
              </div>
            ))
          ) : (
            <p>Nessun album trovato.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
