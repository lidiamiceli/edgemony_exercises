import React, { useState, useEffect } from 'react';
import { fetchAlbums, getLocalAlbums } from '../api/albumClient'; // Solo fetchAlbums
import SkeletonLoader from './SkeletonLoader';
import ErrorComponent from './ErrorComponent';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const [filter, setFilter] = useState('');
  const [genre, setGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [searchTerm, setSearchTerm] = useState('Rap');

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      setIsLoading(true);
      setIsError({ message: "", isError: false });
      try {
        const data = await fetchAlbums(searchTerm);
        setAlbums([...data, ...getLocalAlbums()]);
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
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Cerca
          </button>
        </form>

        <input
          type="text"
          placeholder="Filtra per nome album"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 mr-2 mt-2"/>

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
              <article key={album.collectionId} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                <img
                  alt={album.collectionName}
                  src={album.artworkUrl100}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {album.collectionName}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                    {album.artistName}
                  </p>
                  <Link
                    to={`/album/${album.collectionId}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">Vedi Dettagli
                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">&rarr;
                    </span>
                  </Link>
                </div>
              </article>
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
