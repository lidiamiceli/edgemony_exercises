import React from 'react';
import styles from './AlbumList.module.css';

function AlbumList({ albums, deleteAlbum }) {
  return (
    <div className={styles.albumList}>
      <h2>Album List</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id} className={styles.albumItem}>
            {album.title} - {album.artist} ({album.genre})
            <button onClick={() => deleteAlbum(album.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
