import React from 'react';
import { NavLink } from 'react-router';

import channelIcon from '../../assets/channel-page/channel-icon.png';
import ButtonIcon from '../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { channelPageNavItems } from '../../config/channel-page-nav-items.ts';
import { channelPage } from '../../data/channel-page.ts';
import styles from './channel-page.module.scss';

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

      <nav className={styles.nav}>
        {channelPageNavItems.map((item) =>
          item.isSearchButton ? (
            <ButtonIcon
              icon={item.src!}
              label={item.title!}
              width="19"
              height="19"
            />
          ) : (
            <NavLink
              to={item.link!}
              className={({ isActive }) =>
                isActive ? styles['active-nav-link'] : ''
              }
            >
              {item.title!}
            </NavLink>
          )
        )}
      </nav>
    </main>
  );
};

export default ChannelPage;
