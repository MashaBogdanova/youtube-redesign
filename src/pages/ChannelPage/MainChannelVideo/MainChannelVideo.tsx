import React from 'react';

import VideoCover from '../../../components/UI/VideoCover/VideoCover.tsx';
import { channelPage } from '../../../data/channel-page.ts';
import styles from './main-channel-video.module.scss';

const MainChannelVideo = () => {
  return (
    <section className={styles['main-video']}>
      <VideoCover
        icon={channelPage.mainChannelVideo.cover.base}
        time={channelPage.mainChannelVideo.time}
      />
      <div className={styles['title-description-container']}>
        <h2 className={styles.title}>{channelPage.mainChannelVideo.title}</h2>
        <p className={styles.description}>
          {channelPage.mainChannelVideo.description}
        </p>
        <div className={styles.statistics}>
          <p>{channelPage.mainChannelVideo.viewsCount} views</p>
          <p>·</p>
          <p>{channelPage.mainChannelVideo.whenAdded} ago</p>
        </div>
      </div>
    </section>
  );
};

export default MainChannelVideo;
