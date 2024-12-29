import React from 'react';
import { Link, NavLink } from 'react-router';

import { VideoData } from '../../../types/videoData.ts';
import VideoCover from '../VideoCover/VideoCover.tsx';
import styles from './videos-list.module.scss';

interface Props {
  videos: VideoData[];
  isVertical?: boolean;
}

const VideosList = ({ videos, isVertical = false }: Props) => {
  const screenWidth = window.innerWidth;

  return (
    <ul className={`${styles.list} ${isVertical && styles['vertical-list']}`}>
      {videos.map((video, index) => {
        // Render only 4 items for mobile devices
        if (screenWidth === 320 && index > 3) {
          return;
        }

        return (
          <li aria-label={video.title} key={`${video.author}${video.title}`}>
            <NavLink
              to="#"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              <VideoCover icon={video.cover.base} time={video.time} />
              <h4
                className={styles.title}
                style={{
                  ...(!isVertical && { fontSize: '1.6rem' }),
                  marginBottom: isVertical ? '1.1rem' : '0.4rem',
                }}
              >
                {video.title}
              </h4>
            </NavLink>

            <div
              className={styles['additional-information']}
              style={{
                ...(isVertical && { fontSize: '1.8rem' }),
              }}
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
