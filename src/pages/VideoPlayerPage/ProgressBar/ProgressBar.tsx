import React from 'react';

import styles from './progress-bar.module.scss';

const ProgressBar = () => {
  return (
    <div className={styles['progress-bar']}>
      <div className={styles['current-progress']} />
    </div>
  );
};

export default ProgressBar;
