import React from 'react';

import BurgerIcon from '../BurgerIcon/BurgerIcon.tsx';
import HeaderIcons from '../HeaderIcons/HeaderIcons.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';
import YouTubeLogo from '../UI/YouTubeLogo/YouTubeLogo.tsx';
import UserPicture from '../UserPicture/UserPicture.tsx';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <BurgerIcon />
      <YouTubeLogo />
      <SearchInput />
      <HeaderIcons />
      <UserPicture />
    </header>
  );
};

export default Header;
