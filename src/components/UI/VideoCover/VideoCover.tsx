import React from 'react';

import styles from './video-cover.module.scss';

const VideoCover = ({ icon, time }) => {
  return (
    <div className={styles['icon-container']}>
      <img src={icon} alt="" />
      <span className={styles.time}>{time}</span>
    </div>
  );
};

export default VideoCover;
