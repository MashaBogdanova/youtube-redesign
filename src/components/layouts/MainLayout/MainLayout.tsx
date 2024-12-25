import React from 'react';
import { Outlet } from 'react-router';

import Header from '../../Header/Header.tsx';
import SideMenu from '../../SideMenu/SideMenu.tsx';
import styles from './main-layout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
