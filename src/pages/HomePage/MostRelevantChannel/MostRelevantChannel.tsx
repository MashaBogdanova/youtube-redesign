import React from 'react';
import { Link } from 'react-router';

import Pagination from '../../../components/UI/Pagination/Pagination.tsx';
import { mostRelevantChannel } from '../../../data/most-relevant-channel.ts';
import styles from './most-relevant-channel.module.scss';

const MostRelevantChannel = () => {
  return (
    <section className={styles.channel}>
      <div className={styles['channel-title-container']}>
        <div className={styles['image-title-container']}>
          <img
            src={mostRelevantChannel.channelIcon}
            alt={mostRelevantChannel.channelName}
          />
          <h2 className={styles['channel-title']}>
            {mostRelevantChannel.channelName}
          </h2>
        </div>
        <Pagination />
      </div>

      <ul className={styles['video-list']}>
        {mostRelevantChannel.videos.map((video) => {
          return (
            <li aria-label={video.title}>
              <Link to="#" className={styles['icon-container']}>
                <img src={video.icon} alt="" />
                <span className={styles.time}>{video.time}</span>
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

export default MostRelevantChannel;
