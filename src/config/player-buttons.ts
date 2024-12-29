import settingsIcon from '../assets/video-player-page/video-player/settings-icon.svg';
import subtitlesIcon from '../assets/video-player-page/video-player/subtitles-icon.svg';
import screenWidthIcon from '../assets/video-player-page/video-player/size-icon.svg';
import fullScreenIcon from '../assets/video-player-page/video-player/full-screen-icon.svg';

export const playerButtons = [
  {
    icon: subtitlesIcon,
    label: 'Subtitles',
    width: 27,
    height: 18,
  },
  {
    icon: settingsIcon,
    label: 'Settings',
    width: 27,
    height: 27,
  },
  {
    icon: screenWidthIcon,
    label: 'Fit to Screen',
    width: 30,
    height: 21,
  },
  {
    icon: fullScreenIcon,
    label: 'Full Screen',
    width: 33,
    height: 24,
  },
];
