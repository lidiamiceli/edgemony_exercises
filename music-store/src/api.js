
export const fetchAlbums = (term) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(`https://itunes.apple.com/search?term=${term}&entity=album`)
          .then(response => response.json())
          .then(data => resolve(data.results))
          .catch(error => console.error('Errore nella fetch:', error));
      }, 1000);
    });
  };
  