import React, { useState } from 'react';
import styles from './App.module.css';

function AlbumForm({ addAlbum }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && artist.trim() && genre.trim()) {
      addAlbum({ title, artist, genre });
      setTitle('');
      setArtist('');
      setGenre('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </label>
      <button type="submit">Add Album</button>
    </form>
  );
}

export default AlbumForm;
