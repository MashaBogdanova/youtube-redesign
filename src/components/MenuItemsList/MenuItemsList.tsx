import React from 'react';

import { additionalItems, baseItems } from '../../config/nav-items.ts';
import NavList from '../UI/NavList/NavList.tsx';
import styles from './menu-items-list.module.scss';

const MenuItemsList = () => {
  return (
    <section className={styles.menu}>
      <NavList items={baseItems} />
      <NavList items={additionalItems} />
    </section>
  );
};

export default MenuItemsList;
