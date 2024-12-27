import React from 'react';

import styles from './video-cover.module.scss';

const VideoCover = ({ icon, time }) => {
  return (
    <div className={styles.container}>
      <img className={styles.cover} src={icon} alt="" />
      <span className={styles.time}>{time}</span>
    </div>
  );
};

export default VideoCover;
