import React from 'react';

import styles from './video-player-page.module.scss';
import VideoPlayer from './VideoPlayer/VideoPlayer.tsx';

const VideoPlayerPage = () => {
  return (
    <main className={styles['video-player-page']}>
      <VideoPlayer />
    </main>
  );
};

export default VideoPlayerPage;
