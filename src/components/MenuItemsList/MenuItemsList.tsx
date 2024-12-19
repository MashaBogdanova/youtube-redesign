import React from 'react';
import styles from './menu-items-list.module.scss';
import NavList from '../UI/NavList/NavList.tsx';
import { additionalItems, baseItems } from '../../config/nav-items.ts';

const MenuItemsList = () => {
  return (
    <section className={styles.menu}>
      <NavList items={baseItems} />
      <NavList items={additionalItems} />
    </section>
  );
};

export default MenuItemsList;
