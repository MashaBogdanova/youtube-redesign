import React from 'react';

import VideoListSection from '../../components/UI/VideoListSection/VideoListSection.tsx';
import { channelPage, channelPageVideosList } from '../../data/channel-page.ts';
import styles from './channel-page.module.scss';
import ChannelPageNav from './ChannelPageNav/ChannelPageNav.tsx';
import MainChannelVideo from './MainChannelVideo/MainChannelVideo.tsx';
import TitleSection from './TitleSection/TitleSection.tsx';

const ChannelPage = () => {
  return (
    <main>
      <section className={styles.banner}>
        <img src={channelPage.channelBanner} alt="" width="1595" height="280" />
      </section>
      <TitleSection />
      <ChannelPageNav />
      <MainChannelVideo />
      <VideoListSection sectionData={channelPageVideosList} />
    </main>
  );
};

export default ChannelPage;
