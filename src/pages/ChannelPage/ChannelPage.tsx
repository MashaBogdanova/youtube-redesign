import React from 'react';

import channelIcon from '../../assets/channel-page/channel-icon.png';
import { channelPage } from '../../data/channel-page.ts';
import styles from './channel-page.module.scss';
import ChannelPageNav from './ChannelPageNav/ChannelPageNav.tsx';

const ChannelPage = () => {
  return (
    <main>
      <section className={styles.banner}>
        <img src={channelPage.channelBanner} alt="" />
      </section>

      <section className={styles.title}>
        <img src={channelIcon} alt="" />
        <div>
          <h1>{channelPage.channelTitle}</h1>
          <p className={styles.subscribed}>
            {channelPage.subscribersCount} subscribed
          </p>
        </div>
      </section>
      <ChannelPageNav />
    </main>
  );
};

export default ChannelPage;
