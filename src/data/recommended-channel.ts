import { VideosListSection } from '../types/videos-list-section.ts';
import channelIcon from '../assets/home-page/recommended-channel/cannel-icon.svg';
import video1 from '../assets/home-page/recommended-channel/video1.png';
import video2 from '../assets/home-page/recommended-channel/video2.png';
import video3 from '../assets/home-page/recommended-channel/video3.png';
import video4 from '../assets/home-page/recommended-channel/video4.png';
import video5 from '../assets/home-page/recommended-channel/video5.png';
import video6 from '../assets/home-page/recommended-channel/video6.png';

export const recommendedChannel: VideosListSection = {
  sectionName: 'Food & Drink',
  description: 'Recommended channel for you',
  channelIcon: channelIcon,
  subscribeButton: true,
  videos: [
    {
      title: 'Astronomy Or Astrology',
      author: 'Food & Drink',
      time: '7:36',
      viewsCount: '240k',
      whenAdded: '4 months',
      icon: video1,
    },
    {
      title: 'Advertising Outdoors',
      author: 'Food & Drink',
      time: '2:19',
      viewsCount: '13k',
      whenAdded: '15 days',
      icon: video2,
    },
    {
      title: 'Radio Astronomy',
      author: 'Food & Drink',
      time: '9:05',
      viewsCount: '1k',
      whenAdded: '11 months',
      icon: video3,
    },
    {
      title: 'A Good Autoresponder',
      author: 'Food & Drink',
      time: '3:40',
      viewsCount: '45k',
      whenAdded: '2 months',
      icon: video4,
    },
    {
      title: 'Baby Monitor Technology',
      author: 'Food & Drink',
      time: '1:56',
      viewsCount: '86k',
      whenAdded: '7 days',
      icon: video5,
    },
    {
      title: 'Asteroids',
      author: 'Food & Drink',
      time: '4:15',
      viewsCount: '123k',
      whenAdded: '4 months',
      icon: video6,
    },
  ],
};
