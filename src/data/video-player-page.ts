import videoCover from '../assets/video-player-page/video-cover.png';
import { VideoData } from '../types/videoData.ts';
import channelIcon from '../assets/video-player-page/channel-icon.svg';

interface VideoPlayer extends VideoData {
  currentTime: string;
  channelIcon: string;
}

export const videoPlayerPage: VideoPlayer = {
  title: 'Dude You Re Getting A Telescope',
  author: 'Food & Drink',
  channelIcon,
  time: '19:00',
  currentTime: '1.34',
  viewsCount: '123k',
  likesCount: '123k',
  dislikesCount: '435k',
  whenAdded: '14 Jun 2019',
  cover: videoCover,
  description:
    'A successful marketing plan relies heavily on the pulling-power of ' +
    'advertising copy. Writing result-oriented ad copy is difficult, as it must ' +
    'appeal to, entice, and convince consumers to take action. There is no ' +
    'magic formula to write perfect ad copy; it is based on a number of ' +
    'factors, including ad placement, demographic, even the consumer’s mood ' +
    'when they see your ad. ',
};
