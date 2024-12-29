import React from 'react';

import SubscribeButton from '../../../components/UI/SubscribeButton/SubscribeButton.tsx';
import { SCREEN_WIDTH_MOBILE } from '../../../consts/consts.ts';
import Player from '../Player/Player.tsx';
import VideoInfo from '../VideoInfo/VideoInfo.tsx';
import VideoStatistics from '../VideoStatistics/VideoStatistics.tsx';
import styles from './video-player-section.module.scss';

const VideoPlayerSection = () => {
  const screenWidth = window.innerWidth;
  return (
    <section>
      <Player />
      <VideoStatistics />
      <hr />
      <div className={styles['description-subscribe-container']}>
        <VideoInfo />
        {screenWidth === SCREEN_WIDTH_MOBILE ? (
          <button className={styles['subscribe-button']} aria-label="Subscribe">
            Subscribe
          </button>
        ) : (
          <SubscribeButton />
        )}
      </div>
      <hr className={styles['divider-mobile']} />
    </section>
  );
};

export default VideoPlayerSection;
