import React from 'react';

import styles from './statistics-button.module.scss';

const StatisticsButton = ({ icon, title, label }) => {
  return (
    <button className={styles.button} aria-label={label}>
      <img src={icon} alt="" />
      {title}
    </button>
  );
};

export default StatisticsButton;
