import React from 'react';

import arrowLeft from '../../../assets/ui-icons/left-arrow.svg';
import arrowRight from '../../../assets/ui-icons/right-arrow.svg';
import styles from './pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={styles.button} aria-label="Show previous content">
        <img src={arrowLeft} alt="" />
      </button>
      <button className={styles.button} aria-label="Show previous content">
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
