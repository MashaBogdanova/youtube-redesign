import React from 'react';

import styles from './statistics-button.module.scss';

const StatisticsButton = ({ icon, title, label }) => {
  return (
    <button className={styles.button} aria-label={label}>
      <img src={icon} alt="" />
      <div>{title}</div>
    </button>
  );
};

export default StatisticsButton;
