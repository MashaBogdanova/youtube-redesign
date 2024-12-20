import React from 'react';

import StatisticsButton from '../../../components/UI/StatisticsButton/StatisticsButton.tsx';
import { videoPlayerStatistics } from '../../../config/video-player-statistics.ts';
import { videoPlayerPage } from '../../../data/video-player-page.ts';
import styles from './video-player.module.scss';

const VideoPlayer = () => {
  return (
    <article className={styles.player}>
      <img src={videoPlayerPage.cover} alt="" />
      <h1>{videoPlayerPage.title}</h1>
      <div>{videoPlayerPage.viewsCount} views</div>
      <div className={styles['statistics-buttons-container']}>
        {videoPlayerStatistics.map((item) => {
          return (
            <StatisticsButton
              icon={item.icon}
              label={item.label}
              title={
                item.data === 'Share' ? 'Share' : videoPlayerPage[item.data]
              }
            />
          );
        })}
      </div>
    </article>
  );
};

export default VideoPlayer;
