import searchIcon from '../assets/ui-icons/search-icon.svg';

export interface ChannelPageNavItem {
  title: string;
  link: string;
  isSearchButton: boolean;
  src: string;
}
export const channelPageNavItems: Partial<ChannelPageNavItem>[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Videos',
    link: 'videos',
  },
  {
    title: 'Playlists',
    link: 'playlists',
  },
  {
    title: 'Channels',
    link: 'channels',
  },
  {
    title: 'Discussion',
    link: 'discussion',
  },
  {
    title: 'About',
    link: 'about',
  },
  {
    isSearchButton: true,
    src: searchIcon,
  },
];
