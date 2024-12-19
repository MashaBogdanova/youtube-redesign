import React from 'react';
import styles from './nav-list.module.scss';

const NavList = ({ items, itemsGap = '2.9rem' }) => {
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

export default NavList;
