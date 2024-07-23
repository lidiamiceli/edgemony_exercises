
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
