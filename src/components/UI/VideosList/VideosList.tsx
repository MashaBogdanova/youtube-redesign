import React from 'react';
import styles from './videos-list.module.scss';
import { Link } from 'react-router';
import VideoCover from '../VideoCover/VideoCover.tsx';

const VideosList = ({ videos }) => {
  return (
    <ul className={styles['video-list']}>
      {videos.map((video) => {
        return (
          <li aria-label={video.title} key={`${video.author}${video.title}`}>
            <Link to="#">
              <VideoCover icon={video.cover} time={video.time} />
            </Link>
            <h4 className={styles['video-title']}>
              <Link to="#">{video.title}</Link>
            </h4>

            <div className={styles['additional-information']}>
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
