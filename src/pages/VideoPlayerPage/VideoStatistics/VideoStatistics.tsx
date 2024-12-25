import React from 'react';

import moreIcon from '../../../assets/video-player-page/more-icon.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import StatisticsButton from '../../../components/UI/StatisticsButton/StatisticsButton.tsx';
import { videoPlayerStatistics } from '../../../config/video-player-statistics.ts';
import { videoPlayerPage } from '../../../data/video-player-page.ts';
import styles from './video-statistics.module.scss';

const VideoStatistics = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{videoPlayerPage.title}</h1>
        <div className={styles.views}>{videoPlayerPage.viewsCount} views</div>
      </div>

      <div className={styles['buttons-container']}>
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

        <ButtonIcon
          icon={moreIcon}
          label="Show more options"
          width="28"
          height="6"
        />
      </div>
    </div>
  );
};

export default VideoStatistics;
