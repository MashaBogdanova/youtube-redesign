import React from 'react';
import styles from './settings.module.scss';
import settings from '../../assets/nav-icons/settings.svg';

const Settings = () => {
  return (
    <button className={styles.settings} aria-label="Settings">
      <img src={settings} alt="" />
      Settings
    </button>
  );
};

export default Settings;
