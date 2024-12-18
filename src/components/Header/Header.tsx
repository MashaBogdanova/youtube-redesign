import React from 'react';
import styles from './header.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon.tsx';
// import YouTubeLogo from '../UI/YouTubeLogo/YouTubeLogo.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';
// import HeaderIcons from '../HeaderIcons/HeaderIcons.tsx';
// import UserPicture from '../UserPicture/UserPicture.tsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <BurgerIcon />
      {/*<YouTubeLogo />*/}
      <SearchInput />
      {/*<HeaderIcons />*/}
      {/*<UserPicture />*/}
    </header>
  );
};

export default Header;
