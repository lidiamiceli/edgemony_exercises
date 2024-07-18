import React from 'react';
import styles from './Filter.module.css';

function Filter({ filter, onFilterChange }) {
  return (
    <div className={styles.filter}>
      <label>
        Filter by Genre:
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">All</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="R&B">R&B</option>
          <option value="Rap">Rap</option>
          <option value="Reggae">Reggae</option>
          <option value="Soul">Soul</option>
          <option value="Latina">Latina</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;

