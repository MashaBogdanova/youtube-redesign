import React from 'react';

import channelIcon from '../../assets/channel-page/channel-icon.png';
import { channelPage } from '../../data/channel-page.ts';
import styles from './channel-page.module.scss';
import ChannelPageNav from './ChannelPageNav/ChannelPageNav.tsx';
import notificationIcon from '../../assets/ui-icons/notifications-icon.svg';
import ButtonIcon from '../../components/UI/ButtonIcon/ButtonIcon.tsx';

const ChannelPage = () => {
  return (
    <main className={styles['channel-page']}>
      <section className={styles.banner}>
        <img src={channelPage.channelBanner} alt="" />
      </section>

      <section className={styles['title-section']}>
        <div className={styles['icon-title-container']}>
          <img src={channelIcon} alt="" />
          <div>
            <h1>{channelPage.channelTitle}</h1>
            <p className={styles.subscribed}>
              {channelPage.subscribersCount} subscribed
            </p>
          </div>
        </div>

        <div>
          <ButtonIcon
            icon={notificationIcon}
            label="Subscribe"
            width="22"
            height="26"
          />
        </div>
      </section>
      <ChannelPageNav />
    </main>
  );
};

export default ChannelPage;
