import React from 'react';
import Header from '../../Header/Header.tsx';
import { Outlet } from 'react-router';
import styles from './video-player-page-layout.module.scss';

const VideoPlayerPageLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
};

export default VideoPlayerPageLayout;
