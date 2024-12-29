import React from 'react';

import { videoPlayerPage } from '../../../data/video-player-page.ts';
import styles from './video-info.module.scss';

const VideoInfo = () => {
  return (
    <article className={styles.container}>
      <button aria-label="Channel Icon">
        <img
          className={styles['channel-icon']}
          src={videoPlayerPage.channelIcon}
          alt=""
          width={80}
          height={80}
        />
      </button>

      <div className={styles.information}>
        <div className={styles['title-published-container']}>
          <h2 className={styles.title}>{videoPlayerPage.author}</h2>
          <div className={styles.published}>
            Published on {videoPlayerPage.whenAdded}
          </div>
          <div className={styles.subscribed}>
            {videoPlayerPage.subscribed} subscribed
          </div>
        </div>

        <p className={styles.description}>{videoPlayerPage.description}</p>
        <button className={styles['show-more-button']}>Show more</button>
      </div>
    </article>
  );
};

export default VideoInfo;
