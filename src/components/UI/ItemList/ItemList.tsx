import React from 'react';

import { ListItem } from '../../../types/list-item.ts';
import styles from './item-list.module.scss';

interface Props {
  items: ListItem[];
  itemsGap?: string;
}

const ItemList = ({ items, itemsGap = '2.9rem' }: Props) => {
  return (
    <ul className={styles.list} style={{ gap: itemsGap }}>
      {items.map((item) => {
        return (
          <li
            className={styles.item}
            aria-label={item.itemName}
            key={item.itemName}
          >
            <img src={item.icon} alt="" />
            <p>{item.itemName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
