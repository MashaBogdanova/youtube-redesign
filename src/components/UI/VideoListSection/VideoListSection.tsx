import React from 'react';

import { VideosListSection } from '../../../types/videos-list-section.ts';
import Pagination from '../Pagination/Pagination.tsx';
import SubscribeButton from '../SubscribeButton/SubscribeButton.tsx';
import VideosList from '../VideosList/VideosList.tsx';
import styles from './video-list-section.module.scss';

interface Props {
  sectionData: VideosListSection;
}

const VideoListSection = ({ sectionData }: Props) => {
  return (
    <section className={styles.container}>
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

      <VideosList videos={sectionData.videos} />
    </section>
  );
};

export default VideoListSection;
