import React from 'react';

import channelIcon from '../../../assets/channel-page/channel-icon.png';
import notificationIcon from '../../../assets/ui-icons/notifications-icon.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import SubscribeButton from '../../../components/UI/SubscribeButton/SubscribeButton.tsx';
import { channelPage } from '../../../data/channel-page.ts';
import styles from './title-section.module.scss';

const TitleSection = () => {
  return (
    <section className={styles['title-section']}>
      <div className={styles['icon-title-container']}>
        <img src={channelIcon} alt="" />
        <div>
          <h1 className={styles.title}>{channelPage.channelTitle}</h1>
          <p className={styles.subscribed}>
            {channelPage.subscribersCount} subscribed
          </p>
        </div>
      </div>

      <div className={styles['subscribe-block-container']}>
        <ButtonIcon
          icon={notificationIcon}
          label="Subscribe"
          width="22"
          height="26"
        />
        <SubscribeButton />
      </div>
    </section>
  );
};

export default TitleSection;
