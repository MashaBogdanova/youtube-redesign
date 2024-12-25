import React from 'react';

import VideosList from '../../../components/UI/VideosList/VideosList.tsx';
import { nextVideos } from '../../../data/video-player-page.ts';
import Toggle from '../Toggle/Toggle.tsx';
import styles from './next-videos-section.module.scss';

const NextVideosSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles['title-toggle-container']}>
        <h2 className={styles.title}>Next</h2>
        <Toggle />
      </div>
      <VideosList videos={nextVideos} isVertical />
    </div>
  );
};

export default NextVideosSection;
