import React from 'react';

import NextVideosSection from './NextVideosSection/NextVideosSection.tsx';
import styles from './video-player-page.module.scss';
import VideoPlayerSection from './VideoPlayerSection/VideoPlayerSection.tsx';

const VideoPlayerPage = () => {
  return (
    <main className={styles['video-player-page']}>
      <VideoPlayerSection />
      <NextVideosSection />
    </main>
  );
};

export default VideoPlayerPage;
