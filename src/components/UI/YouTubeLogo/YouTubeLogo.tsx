import React from 'react';
import styles from './youtube-logo.module.scss';
import logo from '../../../assets/header-icons/youtube-icon.svg';
import { Link } from 'react-router';

const YouTubeLogo = () => {
  return (
    <Link className={styles.logo} to="/" aria-label="Go to the home page">
      <img src={logo} alt="" width="116" height="25" />
    </Link>
  );
};

export default YouTubeLogo;
