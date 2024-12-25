import React from 'react';

import moreIcon from '../../../assets/video-player-page/more-icon.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import StatisticsButton from '../../../components/UI/StatisticsButton/StatisticsButton.tsx';
import SubscribeButton from '../../../components/UI/SubscribeButton/SubscribeButton.tsx';
import { videoPlayerStatistics } from '../../../config/video-player-statistics.ts';
import { videoPlayerPage } from '../../../data/video-player-page.ts';
import styles from './video-player.module.scss';
import VideoDescription from './VideoDescription/VideoDescription.tsx';

const VideoPlayer = () => {
  return (
    <article className={styles['player-container']}>
      <img className={styles.player} src={videoPlayerPage.cover} alt="" />

      <div className={styles['title-statistics-container']}>
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

      <hr />

      <div className={styles['description-subscribe-container']}>
        <VideoDescription />
        <SubscribeButton />
      </div>
    </article>
  );
};

export default VideoPlayer;
