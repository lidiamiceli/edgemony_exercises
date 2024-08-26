import React from 'react';

const FilterControls = ({ filter, genre, setFilter, setGenre }) => {
  return (
    <div className="mb-4">
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
  );
};

export default FilterControls;
