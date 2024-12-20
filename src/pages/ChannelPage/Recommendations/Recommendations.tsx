import React from 'react';

import { recommendations } from '../../../data/channel-page.ts';
import styles from './recommendations.module.scss';

const Recommendations = () => {
  return (
    <article className={styles.recommendations}>
      <h3 className={styles.title}>Recommended channel</h3>
      {recommendations.map((item) => {
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
    </article>
  );
};

export default Recommendations;
