import React from 'react';
import styles from './subscriptions.module.scss';
import { NavListItems } from '../../types/NavListItems.ts';
import user1 from '../../assets/subscriptions-icons/user1.svg';
import user2 from '../../assets/subscriptions-icons/user2.svg';
import user3 from '../../assets/subscriptions-icons/user3.svg';
import user4 from '../../assets/subscriptions-icons/user4.svg';
import user5 from '../../assets/subscriptions-icons/user5.svg';
import user6 from '../../assets/subscriptions-icons/user6.svg';

const Subscriptions = () => {
  const subscriptions: NavListItems[] = [
    { icon: user1, itemName: 'Gussie Singleton' },
    { icon: user2, itemName: 'Nora Francis' },
    { icon: user3, itemName: 'Belle Briggs' },
    { icon: user4, itemName: 'Eunice Cortez' },
    { icon: user5, itemName: 'Emma Hanson' },
    { icon: user6, itemName: 'Leah Berry' },
  ];
  return (
    <div className={styles.subscriptions}>
      <h3 className={styles.title}>Subscriptions</h3>
      <ul>
        {subscriptions.map((item) => {
          return (
            <li key={item.itemName}>
              <img src={item.icon} alt="" />
              <p>{item.itemName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subscriptions;
