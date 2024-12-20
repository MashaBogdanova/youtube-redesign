import likeIcon from '../assets/video-player-page/like-icon.svg';
import dislikeIcon from '../assets/video-player-page/dislike-icon.svg';
import shareIcon from '../assets/video-player-page/share-icon.svg';

interface VideoPlayerStatisticsButton {
  icon: string;
  label: string;
  data: string;
}

export const videoPlayerStatistics: VideoPlayerStatisticsButton[] = [
  {
    icon: likeIcon,
    label: 'Number of likes',
    data: 'likesCount',
  },
  {
    icon: dislikeIcon,
    label: 'Number of dislikes',
    data: 'dislikesCount',
  },
  {
    icon: shareIcon,
    label: 'Share link',
    data: 'Share',
  },
];
