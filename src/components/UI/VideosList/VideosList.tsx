import React from 'react';
import { Link } from 'react-router';

import { VideoData } from '../../../types/videoData.ts';
import VideoCover from '../VideoCover/VideoCover.tsx';
import styles from './videos-list.module.scss';

interface Props {
  videos: VideoData[];
  isVertical?: boolean;
}

const VideosList = ({ videos, isVertical = false }: Props) => {
  return (
    <ul
      className={`${styles['list']} ${isVertical && styles['vertical-list']}`}
    >
      {videos.map((video) => {
        return (
          <li aria-label={video.title} key={`${video.author}${video.title}`}>
            <Link to="#">
              <VideoCover icon={video.cover} time={video.time} />
            </Link>
            <h4
              className={styles['title']}
              style={{
                fontSize: isVertical ? '2.6rem' : '1.6rem',
                marginBottom: isVertical ? '1.1rem' : '0.4rem',
              }}
            >
              <Link to="#">{video.title}</Link>
            </h4>

            <div
              className={styles['additional-information']}
              style={{ fontSize: isVertical ? '1.8rem' : '1.3rem' }}
            >
              <div className={styles['views-date-container']}>
                <span>{video.viewsCount} views</span>
                <span>·</span>
                <span>{video.whenAdded} ago</span>
              </div>
              <Link to="#">{video.author}</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default VideosList;
