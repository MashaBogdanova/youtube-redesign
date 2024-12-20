import React from 'react';

import { additionalItems, baseItems } from '../../config/nav-items.ts';
import ItemList from '../UI/ItemList/ItemList.tsx';
import styles from './menu-items-list.module.scss';

const MenuItemsList = () => {
  return (
    <section className={styles.menu}>
      <ItemList items={baseItems} />
      <ItemList items={additionalItems} />
    </section>
  );
};

export default MenuItemsList;
