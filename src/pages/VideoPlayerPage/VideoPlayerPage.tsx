import React from 'react';

import styles from './video-player-page.module.scss';
import VideoPlayerSection from './VideoPlayerSection/VideoPlayerSection.tsx';

const VideoPlayerPage = () => {
  return (
    <main className={styles['video-player-page']}>
      <VideoPlayerSection />
    </main>
  );
};

export default VideoPlayerPage;
