import React from 'react';

import { additionalItems, baseItems } from '../../config/nav-items.ts';
import { SCREEN_WIDTH_MOBILE } from '../../consts/consts.ts';
import ItemList from '../UI/ItemList/ItemList.tsx';
import styles from './menu-items-list.module.scss';

const MenuItemsList = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= SCREEN_WIDTH_MOBILE) {
    return <ItemList items={[...baseItems, additionalItems[0]]} />;
  }

  return (
    <section className={styles.menu}>
      <ItemList items={baseItems} />
      <ItemList items={additionalItems} />
    </section>
  );
};

export default MenuItemsList;
