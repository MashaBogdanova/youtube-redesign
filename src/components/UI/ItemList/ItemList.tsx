import React from 'react';
import { NavLink } from 'react-router';

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
            <NavLink
              to={item.URIParam}
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
            >
              <img src={item.icon} alt="" />
              <p>{item.itemName}</p>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
