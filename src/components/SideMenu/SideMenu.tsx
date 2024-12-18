import React from 'react';
import styles from './side-menu.module.scss';
import MenuItemsList from '../MenuItemsList/MenuItemsList.tsx';
import Subscriptions from '../Subscriptions/Subscriptions.tsx';
import Settings from '../Settings/Settings.tsx';

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
