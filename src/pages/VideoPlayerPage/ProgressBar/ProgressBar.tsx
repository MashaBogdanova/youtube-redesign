import React from 'react';

import styles from './progress-bar.module.scss';

const ProgressBar = () => {
  return (
    <div
      className={styles['progress-bar']}
      role="progressbar"
      aria-label="Video playback progress"
    >
      <div className={styles['current-progress']} aria-hidden={true} />
    </div>
  );
};

export default ProgressBar;
