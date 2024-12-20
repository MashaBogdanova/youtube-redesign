import React from 'react';
import { channelPageNavItems } from '../../../config/channel-page-nav-items.ts';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { NavLink } from 'react-router';
import styles from './channel-page-nav.module.scss';

const ChannelPageNav = () => {
  return (
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
  );
};

export default ChannelPageNav;
