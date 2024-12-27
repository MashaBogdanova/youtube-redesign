import React from 'react';

import userIcon from '../../assets/header-icons/user-icon.svg';
import styles from './user-picture.module.scss';

const UserPicture = () => {
  return (
    <button className={styles.picture} aria-label="Open user profile menu">
      <img
        className={styles.icon}
        src={userIcon}
        alt=""
        width={40}
        height={40}
      />
    </button>
  );
};

export default UserPicture;
