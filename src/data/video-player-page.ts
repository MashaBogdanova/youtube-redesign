import videoCover from '../assets/video-player-page/video-cover.png';
import videoCoverMobile from '../assets/video-player-page/video-cover-mobile.png';
import { VideoData } from '../types/videoData.ts';
import channelIcon from '../assets/video-player-page/channel-icon.svg';
import nextVideo1 from '../assets/video-player-page/next-videos/next-video-1.png';
import nextVideo2 from '../assets/video-player-page/next-videos/next-video-2.png';
import nextVideo3 from '../assets/video-player-page/next-videos/next-video-3.png';
import nextVideo4 from '../assets/video-player-page/next-videos/next-video-4.png';

interface VideoPlayer extends VideoData {
  currentTime: string;
  channelIcon: string;
  remainingTime: string;
  subscribed: string;
}

export const videoPlayerPage: VideoPlayer = {
  title: 'Dude You Re Getting A Telescope',
  author: 'Food & Drink',
  channelIcon,
  time: '19:00',
  currentTime: '1:34',
  remainingTime: '-10:00',
  viewsCount: '123k',
  likesCount: '123k',
  dislikesCount: '435k',
  whenAdded: '14 Jun 2019',
  subscribed: '245k',
  cover: { base: videoCover, mobile: videoCoverMobile },
  description:
    'A successful marketing plan relies heavily on the pulling-power of ' +
    'advertising copy. Writing result-oriented ad copy is difficult, as it must ' +
    'appeal to, entice, and convince consumers to take action. There is no ' +
    'magic formula to write perfect ad copy; it is based on a number of ' +
    'factors, including ad placement, demographic, even the consumer’s mood ' +
    'when they see your ad. ',
};

export const nextVideos: VideoData[] = [
  {
    title: 'Baby Monitor Technology',
    author: 'Dollie Blair',
    time: '8:00',
    viewsCount: '123k',
    cover: { base: nextVideo1 },
  },
  {
    title: 'A Good Autoresponder',
    author: 'Dollie Blair',
    time: '8:00',
    viewsCount: '123k',
    cover: { base: nextVideo2 },
  },
  {
    title: 'Selecting The Right Hotel',
    author: 'Dollie Blair',
    time: '8:00',
    viewsCount: '123k',
    cover: { base: nextVideo3 },
  },
  {
    title: 'Selecting The Right Hotel',
    author: 'Dollie Blair',
    time: '8:00',
    viewsCount: '123k',
    cover: { base: nextVideo4 },
  },
];
