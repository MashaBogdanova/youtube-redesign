import { ListItem } from '../types/list-item.ts';
import home from '../assets/nav-icons/home.svg';
import trending from '../assets/nav-icons/trending.svg';
import subscriptions from '../assets/nav-icons/subscriptions.svg';
import library from '../assets/nav-icons/library.svg';
import history from '../assets/nav-icons/history.svg';
import watch from '../assets/nav-icons/watch.svg';
import favourites from '../assets/nav-icons/favourites.svg';
import liked from '../assets/nav-icons/liked.svg';
import music from '../assets/nav-icons/music.svg';
import games from '../assets/nav-icons/games.svg';
import arrow from '../assets/nav-icons/expand-menu-arrow.svg';

export const baseItems: ListItem[] = [
  { icon: home, itemName: 'Home', URIParam: '/' },
  { icon: trending, itemName: 'Trending', URIParam: 'trending' },
  { icon: subscriptions, itemName: 'Subscriptions', URIParam: 'subscriptions' },
];
export const additionalItems: ListItem[] = [
  { icon: library, itemName: 'Library', URIParam: 'library' },
  { icon: history, itemName: 'History', URIParam: 'history' },
  { icon: watch, itemName: 'Watch later', URIParam: 'later' },
  {
    icon: favourites,
    itemName: 'Favourites',
    URIParam: 'favourites',
  },
  {
    icon: liked,
    itemName: 'Liked videos',
    URIParam: 'liked',
  },
  {
    icon: music,
    itemName: 'Music',
    URIParam: 'music',
  },
  {
    icon: games,
    itemName: 'Games',
    URIParam: 'games',
  },
  {
    icon: arrow,
    itemName: 'Show more',
    URIParam: 'more',
  },
];
