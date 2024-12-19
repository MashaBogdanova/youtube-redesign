import React from 'react';

import MenuItemsList from '../MenuItemsList/MenuItemsList.tsx';
import Settings from '../Settings/Settings.tsx';
import Subscriptions from '../Subscriptions/Subscriptions.tsx';
import styles from './side-menu.module.scss';

const SideMenu = () => {
  return (
    <nav className={styles.nav}>
      <MenuItemsList />
      <Subscriptions />
      <Settings />
    </nav>
  );
};

export default SideMenu;
