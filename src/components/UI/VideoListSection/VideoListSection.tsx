import React from 'react';
import { Link } from 'react-router';

import { VideosListSection } from '../../../types/videos-list-section.ts';
import Pagination from '../Pagination/Pagination.tsx';
import SubscribeButton from '../SubscribeButton/SubscribeButton.tsx';
import styles from './video-list-section.module.scss';
import VideoCover from '../VideoCover/VideoCover.tsx';

interface Props {
  sectionData: VideosListSection;
}

const VideoListSection = ({ sectionData }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles['top-block-container']}>
        <div className={styles['image-title-container']}>
          {sectionData.channelIcon && (
            <img src={sectionData.channelIcon} alt={sectionData.sectionName} />
          )}
          <h2
            className={styles['channel-title']}
            aria-describedby={sectionData.description && 'description'}
          >
            {sectionData.sectionName}
          </h2>
          {sectionData.description && (
            <p className={styles['title-description']}>
              {sectionData.description}
            </p>
          )}
        </div>

        <div className={styles['subscribe-paginate-container']}>
          {sectionData.subscribeButton && <SubscribeButton />}
          <Pagination />
        </div>
      </div>

      <ul className={styles['video-list']}>
        {sectionData.videos.map((video) => {
          return (
            <li aria-label={video.title} key={`${video.author}${video.title}`}>
              <Link to="#">
                <VideoCover icon={video.icon} time={video.time} />
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
    </section>
  );
};

export default VideoListSection;
