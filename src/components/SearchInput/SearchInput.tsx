import React from 'react';

import styles from './search-input.module.scss';

const SearchInput = () => {
  return (
    <input
      className={styles.input}
      type="search"
      id="search-input"
      aria-label="Search"
      placeholder="Search"
    />
  );
};

export default SearchInput;
