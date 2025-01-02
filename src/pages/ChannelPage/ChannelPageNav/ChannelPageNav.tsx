import React from 'react';
import { NavLink } from 'react-router';

import arrowDownIcon from '../../../assets/ui-icons/down-arrow.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { channelPageNavItems } from '../../../config/channel-page-nav-items.ts';
import { SCREEN_WIDTH_MOBILE } from '../../../consts/consts.ts';
import styles from './channel-page-nav.module.scss';

const ChannelPageNav = () => {
  const screenWidth = window.innerWidth;
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-items-list']}>
        {channelPageNavItems.map((item, index) => {
          if (screenWidth <= SCREEN_WIDTH_MOBILE && index >= 3) {
            return;
          }

          return item.isSearchButton ? (
            <ButtonIcon
              icon={item.src!}
              label={item.title!}
              width="19"
              height="19"
              key={item.title + index}
            />
          ) : (
            <NavLink
              to={item.link!}
              className={({ isActive }) =>
                isActive ? styles['active-nav-link'] : ''
              }
              key={item.title}
            >
              {item.title!}
            </NavLink>
          );
        })}
      </ul>
      <button
        className={styles['more-options-button']}
        aria-label="Show more options"
      >
        <img src={arrowDownIcon} alt="" width={10} height={7} />
      </button>
    </nav>
  );
};

export default ChannelPageNav;
