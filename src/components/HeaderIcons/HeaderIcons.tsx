import React from 'react';
import styles from './header-icons.module.scss';
import videoCall from '../../assets/icons/video-call-icon.svg';
import options from '../../assets/icons/header-options-icon.svg';
import notifications from '../../assets/icons/notifications-icon.svg';

const HeaderIcons = () => {
  return (
    <ul className={styles.icons}>
      <li>
        <button className={styles.icon} aria-label="Open menu">
          <img src={videoCall} alt="" width="20" height="17" />
        </button>
      </li>
      <li>
        <button className={styles.icon} aria-label="Open menu">
          <img src={options} alt="" width="20" height="17" />
        </button>
      </li>
      <li className={styles.notifications}>
        <button className={styles.icon} aria-label="Open menu">
          <img src={notifications} alt="" width="20" height="17" />
        </button>
        <div className={styles.notifications__count}>3</div>
      </li>
    </ul>
  );
};

export default HeaderIcons;
