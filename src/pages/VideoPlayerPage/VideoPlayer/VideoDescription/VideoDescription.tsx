import React from 'react';

import ButtonIcon from '../../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { videoPlayerPage } from '../../../../data/video-player-page.ts';
import styles from './videi-description.module.scss';

const VideoDescription = () => {
  return (
    <article className={styles.container}>
      <ButtonIcon
        icon={videoPlayerPage.channelIcon}
        label={'Channel Icon'}
        width="80"
        height="80"
      />
      <div className={styles.information}>
        <div>
          <h2 className={styles.title}>{videoPlayerPage.author}</h2>
          <div className={styles.published}>
            Published on {videoPlayerPage.whenAdded}
          </div>
        </div>

        <p className={styles.description}>{videoPlayerPage.description}</p>
        <button className={styles['show-more-button']}>Show more</button>
      </div>
    </article>
  );
};

export default VideoDescription;
