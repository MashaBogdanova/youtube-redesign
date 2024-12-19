import React from 'react';
import styles from './subscriptions.module.scss';
import NavList from '../UI/NavList/NavList.tsx';
import { subscriptions } from '../../data/subscriptions.ts';

const Subscriptions = () => {
  return (
    <div className={styles.subscriptions}>
      <h3 className={styles.title}>Subscriptions</h3>
      <NavList items={subscriptions} itemsGap="2.3rem" />
    </div>
  );
};

export default Subscriptions;
