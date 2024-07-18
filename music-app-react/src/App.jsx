import React, { useState } from 'react';
import styles from './App.module.css';
import AlbumForm from './AlbumForm';
import AlbumList from './AlbumList';
import Filter from './Filter';

const initialAlbums = [
  { id: 1, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', genre: 'Rock' },
  { id: 2, title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop' },
];

function App() {
  const [albums, setAlbums] = useState(initialAlbums);
  const [filter, setFilter] = useState('');

  const addAlbum = (album) => {
    setAlbums([...albums, { ...album, id: albums.length + 1 }]);
  };

  const deleteAlbum = (id) => {
    setAlbums(albums.filter((album) => album.id !== id));
  };

  const handleFilterChange = (genre) => {
    setFilter(genre);
  };

  const filteredAlbums = filter ? albums.filter((album) => album.genre === filter) : albums;

  return (
    <div className={styles.container}>
      <h1>Music Albums</h1>
      <AlbumForm addAlbum={addAlbum} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <div className={styles['album-list-container']}>
        <AlbumList albums={filteredAlbums} deleteAlbum={deleteAlbum} />
      </div>
    </div>
  );
}

export default App;
