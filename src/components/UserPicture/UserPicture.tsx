import React from 'react';
import styles from '../UI/BurgerIcon/burger-icon.module.scss';
import userIcon from '../../assets/icons/user-icon.svg';

const UserPicture = () => {
  return (
    <button className={styles.burger} aria-label="Open user profile menu">
      <img src={userIcon} alt="User profile" width="40" height="40" />
    </button>
  );
};

export default UserPicture;
