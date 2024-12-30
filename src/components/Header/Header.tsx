import { useLocation } from 'react-router';

import moreIcon from '../../assets/ui-icons/more-icon.svg';
import { SCREEN_WIDTH_MOBILE } from '../../consts/consts.ts';
import BurgerIcon from '../BurgerIcon/BurgerIcon.tsx';
import HeaderIcons from '../HeaderIcons/HeaderIcons.tsx';
import SearchInput from '../SearchInput/SearchInput.tsx';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';
import YouTubeLogo from '../UI/YouTubeLogo/YouTubeLogo.tsx';
import UserPicture from '../UserPicture/UserPicture.tsx';
import styles from './header.module.scss';

const Header = () => {
  const pagePathname = useLocation().pathname;
  const screenWidth = window.innerWidth;

  return (
    <header className={styles.header}>
      <BurgerIcon />
      <YouTubeLogo />
      <SearchInput />
      <HeaderIcons />
      {screenWidth > SCREEN_WIDTH_MOBILE || pagePathname === '/' ? (
        <UserPicture />
      ) : (
        <ButtonIcon
          icon={moreIcon}
          label="Show more options"
          translateX={7}
          translateY={-2}
          rotate={90}
          scale={0.7}
        />
      )}
    </header>
  );
};

export default Header;
