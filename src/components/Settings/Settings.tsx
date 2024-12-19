import React from 'react';

import settings from '../../assets/nav-icons/settings.svg';
import styles from './settings.module.scss';

const Settings = () => {
  return (
    <button className={styles.settings} aria-label="Settings">
      <img src={settings} alt="" />
      Settings
    </button>
  );
};

export default Settings;
