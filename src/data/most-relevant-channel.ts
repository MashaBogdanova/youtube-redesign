import video1 from '../assets/home-page/most-relevant-channel/video1.png';
import video2 from '../assets/home-page/most-relevant-channel/video2.png';
import video3 from '../assets/home-page/most-relevant-channel/video3.png';
import video4 from '../assets/home-page/most-relevant-channel/video4.png';
import video5 from '../assets/home-page/most-relevant-channel/video5.png';
import video6 from '../assets/home-page/most-relevant-channel/video6.png';
import channelIcon from '../assets/home-page/most-relevant-channel/channel-icon.svg';
import { VideosListSection } from '../types/videos-list-section.ts';
export const mostRelevantChannel: VideosListSection = {
  sectionName: 'Dollie Blair',
  channelIcon: channelIcon,
  subscribeButton: false,
  videos: [
    {
      title: 'A Brief History Of Creation',
      author: 'Dollie Blair',
      time: '4:15',
      viewsCount: '80k',
      whenAdded: '3 days',
      cover: video1,
    },
    {
      title: 'Selecting The Right Hotel',
      author: 'Dollie Blair',
      time: '8:00',
      viewsCount: '123k',
      whenAdded: '1 months',
      cover: video2,
    },
    {
      title: 'Asteroids',
      author: 'Dollie Blair',
      time: '5:32',
      viewsCount: '43k',
      whenAdded: '12 days',
      cover: video3,
    },
    {
      title: 'Telescopes 101',
      author: 'Dollie Blair',
      time: '6:40',
      viewsCount: '11k',
      whenAdded: '6 months',
      cover: video4,
    },
    {
      title: 'Medical Care Is Just',
      author: 'Dollie Blair',
      time: '1:45',
      viewsCount: '18k',
      whenAdded: '2 days',
      cover: video5,
    },
    {
      title: 'Moon Gazing',
      author: 'Dollie Blair',
      time: '2:12',
      viewsCount: '67k',
      whenAdded: '4 months',
      cover: video6,
    },
  ],
};
