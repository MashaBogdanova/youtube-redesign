import React from 'react';
import { Link, useLocation } from 'react-router';

import logo from '../../../assets/header-icons/youtube-icon.svg';
import logoSecondary from '../../../assets/header-icons/youtube-icon-2.svg';
import styles from './youtube-logo.module.scss';

const YouTubeLogo = () => {
  const pagePath = useLocation().pathname;
  const screenWidth = window.innerWidth;
  return (
    <Link className={styles.logo} to="/" aria-label="Go to the home page">
      {pagePath === '/channel' && screenWidth === 320 ? (
        <div className={styles['logo-title-container']}>
          <img src={logoSecondary} alt="" width={37} height={25} />
          <p className={styles.title}>Margaret Phelps</p>
        </div>
      ) : (
        <img src={logo} alt="" width={116} height={25} />
      )}
    </Link>
  );
};

export default YouTubeLogo;
