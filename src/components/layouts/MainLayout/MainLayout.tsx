import React from 'react';
import Header from '../../Header/Header.tsx';
import SideMenu from '../../SideMenu/SideMenu.tsx';
import { Outlet } from 'react-router';
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
