import { VideosListSection } from '../types/videos-list-section.ts';
import video1 from '../assets/home-page/recommended-videos/video1.png';
import video2 from '../assets/home-page/recommended-videos/video2.png';
import video3 from '../assets/home-page/recommended-videos/video3.png';

export const recommendedVideos: VideosListSection = {
  sectionName: 'Recommended',
  subscribeButton: false,
  videos: [
    {
      title: 'Dude You Re Getting A Telescope',
      author: 'Gussie French',
      time: '3:40',
      viewsCount: '34k',
      whenAdded: '5 months',
      cover: { base: video1 },
    },
    {
      title: 'Moon Gazing',
      author: 'Edward Osborne',
      time: '2:12',
      viewsCount: '54k',
      whenAdded: '11 months',
      cover: { base: video2 },
    },
    {
      title: 'Moon Gazing',
      author: 'Dollie Blair',
      time: '2:12',
      viewsCount: '125k',
      whenAdded: '4 months',
      cover: { base: video3 },
    },
  ],
};
