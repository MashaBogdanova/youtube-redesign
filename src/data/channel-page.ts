import channelBanner from '../assets/channel-page/banner.png';
import channelIcon from '../assets/channel-page/channel-icon.png';
import mainVideoCover from '../assets/channel-page/main-video-cover.png';
import recommendedChannel1 from '../assets/channel-page/recommended-channel-icon-1.svg';
import recommendedChannel2 from '../assets/channel-page/recommended-channel-icon-2.svg';
import recommendedChannel3 from '../assets/channel-page/recommended-channel-icon-3.svg';
import video1 from '../assets/channel-page/channel-video-1.png';
import video2 from '../assets/channel-page/channel-video-2.png';
import video3 from '../assets/channel-page/channel-video-3.png';
import video4 from '../assets/channel-page/channel-video-4.png';
import video5 from '../assets/channel-page/channel-video-5.png';
import video6 from '../assets/channel-page/channel-video-6.png';
import {
  MainVideoData,
  VideoData,
  VideosListSection,
} from '../types/videos-list-section.ts';

export interface ChannelPage {
  channelBanner: string;
  channelTitle: string;
  channelIcon: string;
  subscribersCount: string;
  recommendedChannels: {
    icon: string;
    name: string;
  }[];
  mainChannelVideo: MainVideoData;
  channelVideos: VideoData[];
}

const channelVideos: VideoData[] = [
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
];

export const channelPage: ChannelPage = {
  channelBanner: channelBanner,
  channelTitle: 'Margaret Phelps',
  channelIcon: channelIcon,
  subscribersCount: '245K',
  recommendedChannels: [
    { icon: recommendedChannel1, name: 'Flora Benson' },
    {
      icon: recommendedChannel2,
      name: 'Violet Cobb',
    },
    {
      icon: recommendedChannel3,
      name: 'Phillip Mullins',
    },
  ],
  mainChannelVideo: {
    title: 'Choosing The Best Audio Player Software For Your Computer',
    description:
      'Your cheap internet-based banner advertising will become one of the sought ' +
      'for ads there are. Today, the world of Internet advertising is rapidly ' +
      'evolving beyond banner ads and intrusive pop-ups. Bayles A common medium ' +
      'for advertising on the Internet is the use of banner ads.',
    author: 'Margaret Phelps',
    time: '7:36',
    viewsCount: '11k',
    whenAdded: '6 months',
    icon: mainVideoCover,
  },
  channelVideos: channelVideos,
};

export const channelPageVideosList: VideosListSection = {
  sectionName: 'Margaret Phelps videos',
  videos: channelVideos,
  subscribeButton: false,
};
