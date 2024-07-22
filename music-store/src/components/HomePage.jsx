import React, { useState, useEffect } from 'react';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import { fetchAlbums } from '../api';

const HomePage = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [filter, setFilter] = useState('');
  const [genre, setGenre] = useState(''); 

  useEffect(() => {
    const randomArtists = ['beatles', 'queen', '2pac', 'drake', 'eminem'];
    const randomArtist = randomArtists[Math.floor(Math.random() * randomArtists.length)];
    
    fetchAlbums(randomArtist).then(data => setAlbums(data));
  }, []);

  const searchAlbums = (term) => {
    fetchAlbums(term).then(data => setAlbums(data));
  };

  const filteredAlbums = albums.filter(album =>
    album.collectionName.toLowerCase().includes(filter.toLowerCase()) &&
    (genre ? album.primaryGenreName.toLowerCase() === genre.toLowerCase() : true)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 text-center">Vibes Album Store</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cerca album"
          onBlur={(e) => searchAlbums(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Filtra per nome album"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 mr-2"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border p-2"
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
      {selectedAlbum ? (
        <AlbumDetail album={selectedAlbum} onBack={() => setSelectedAlbum(null)} />
      ) : (
        <AlbumList albums={filteredAlbums} onSelect={setSelectedAlbum} />
      )}
    </div>
  );
};

export default HomePage;
