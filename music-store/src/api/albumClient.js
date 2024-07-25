

export const fetchAlbumDetail = async (id) => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Errore nella fetch:', error);
    throw error;
  }
};

export const fetchAlbums = async (term) => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=album`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Errore nella fetch:', error);
    throw error;
  }
};


export const fetchAlbumById = async (id) => {
  try {
    const response = await fetch(`https://itunes.apple.com/lookup?id=${id}`);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Errore nella fetch:', error);
    throw error;
  }
};

const localAlbums = [];

export const addAlbum = async (album) => {
  localAlbums.push(album);
  return album;
};

export const updateAlbum = async (id, updatedAlbum) => {
  const index = localAlbums.findIndex(album => album.collectionId === id);
  if (index !== -1) {
    localAlbums[index] = updatedAlbum;
    return updatedAlbum;
  }
  throw new Error('Album non trovato');
};

export const deleteAlbum = async (id) => {
  const index = localAlbums.findIndex(album => album.collectionId === id);
  if (index !== -1) {
    localAlbums.splice(index, 1);
    return id;
  }
  throw new Error('Album non trovato');
};

export const getLocalAlbums = () => localAlbums;
