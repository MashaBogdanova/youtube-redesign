import React from 'react';
import styles from './menu-items-list.module.scss';
import home from '../../assets/nav-icons/home.svg';
import trending from '../../assets/nav-icons/trending.svg';
import subscriptions from '../../assets/nav-icons/subscriptions.svg';
import library from '../../assets/nav-icons/library.svg';
import history from '../../assets/nav-icons/history.svg';
import watch from '../../assets/nav-icons/watch.svg';
import favourites from '../../assets/nav-icons/favourites.svg';
import liked from '../../assets/nav-icons/liked.svg';
import music from '../../assets/nav-icons/music.svg';
import games from '../../assets/nav-icons/games.svg';
import arrow from '../../assets/nav-icons/expand-menu-arrow.svg';
import { NavListItems } from '../../types/NavListItems.ts';
import NavList from '../UI/NavList/NavList.tsx';

const MenuItemsList = () => {
  const baseItems: NavListItems[] = [
    { icon: home, itemName: 'Home' },
    { icon: trending, itemName: 'Trending' },
    { icon: subscriptions, itemName: 'Subscriptions' },
  ];
  const additionalItems: NavListItems[] = [
    { icon: library, itemName: 'Library' },
    { icon: history, itemName: 'History' },
    { icon: watch, itemName: 'Watch later' },
    {
      icon: favourites,
      itemName: 'Favourites',
    },
    {
      icon: liked,
      itemName: 'Liked videos',
    },
    {
      icon: music,
      itemName: 'Music',
    },
    {
      icon: games,
      itemName: 'Games',
    },
    {
      icon: arrow,
      itemName: 'Show more',
    },
  ];

  return (
    <section className={styles.menu}>
      <NavList items={baseItems} />
      <NavList items={additionalItems} />
    </section>
  );
};

export default MenuItemsList;
