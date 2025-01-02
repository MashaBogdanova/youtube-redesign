import React from 'react';

import VideoListSection from '../../components/UI/VideoListSection/VideoListSection.tsx';
import { channelPageVideosList } from '../../data/channel-page.ts';
import Banner from './Banner/Banner.tsx';
import styles from './channel-page.module.scss';
import ChannelPageNav from './ChannelPageNav/ChannelPageNav.tsx';
import MainChannelVideo from './MainChannelVideo/MainChannelVideo.tsx';
import Recommendations from './Recommendations/Recommendations.tsx';
import TitleSection from './TitleSection/TitleSection.tsx';

const ChannelPage = () => {
  // todo: fix video list overflow-x
  return (
    <main className={styles['channel-page']}>
      <Banner />
      <TitleSection />
      <div className={styles['nav-video-recommendations-container']}>
        <ChannelPageNav />
        <MainChannelVideo />
        <Recommendations />
      </div>
      <VideoListSection sectionData={channelPageVideosList} />
    </main>
  );
};

export default ChannelPage;
