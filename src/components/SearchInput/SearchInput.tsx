import React from 'react';

import searchIcon from '../../assets/ui-icons/search-icon.svg';
import styles from './search-input.module.scss';

const SearchInput = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        id="search-input"
        aria-label="Type what you want to find"
        placeholder="Search"
      />
      <button className={styles.icon} aria-label="Search">
        <img src={searchIcon} alt="" width={19} height={19} />
      </button>
    </div>
  );
};

export default SearchInput;
