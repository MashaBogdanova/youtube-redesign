import React from 'react';

import VideoListSection from '../../components/UI/VideoListSection/VideoListSection.tsx';
import { channelPage, channelPageVideosList } from '../../data/channel-page.ts';
import styles from './channel-page.module.scss';
import ChannelPageNav from './ChannelPageNav/ChannelPageNav.tsx';
import MainChannelVideo from './MainChannelVideo/MainChannelVideo.tsx';
import Recommendations from './Recommendations/Recommendations.tsx';
import TitleSection from './TitleSection/TitleSection.tsx';

const ChannelPage = () => {
  return (
    <main className={styles['channel-page']}>
      <section className={styles['banner-section']}>
        <picture>
          <source
            srcSet={channelPage.channelBanner.mobile}
            media="(max-width: 320px)"
          />
          <img src={channelPage.channelBanner.base} alt="" />
        </picture>
      </section>
      <TitleSection />
      <ChannelPageNav />
      <MainChannelVideo />
      <Recommendations />
      <VideoListSection sectionData={channelPageVideosList} />
    </main>
  );
};

export default ChannelPage;
