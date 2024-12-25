import React from 'react';

import fullScreenIcon from '../../../../assets/video-player-page/video-player/full-screen-icon.svg';
import nextIcon from '../../../../assets/video-player-page/video-player/next-icon.svg';
import pauseIcon from '../../../../assets/video-player-page/video-player/pause-icon.svg';
import settingsIcon from '../../../../assets/video-player-page/video-player/settings-icon.svg';
import screenWidthIcon from '../../../../assets/video-player-page/video-player/size-icon.svg';
import soundIcon from '../../../../assets/video-player-page/video-player/sound-icon.svg';
import subtitlesIcon from '../../../../assets/video-player-page/video-player/subtitles-icon.svg';
import ButtonIcon from '../../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { videoPlayerPage } from '../../../../data/video-player-page.ts';
import styles from './player.module.scss';
import ProgressBar from '../../../../components/UI/ProgressBar/ProgressBar.tsx';

const Player = () => {
  return (
    <article className={styles.container}>
      <img src={videoPlayerPage.cover} alt="" />

      <div className={styles['player-buttons']}>
        <div className={styles.time}>
          <p>{videoPlayerPage.currentTime}</p>
          <p>{videoPlayerPage.time}</p>
        </div>

        <ProgressBar height={10} progress={280} accent />

        <div className={styles['buttons-container']}>
          <div className={styles['left-buttons-container']}>
            <ButtonIcon icon={pauseIcon} label="Pause" width="22" height="24" />
            <ButtonIcon
              icon={nextIcon}
              label="Next video"
              width="27"
              height="18"
            />

            <div className={styles['volume-container']}>
              <ButtonIcon
                icon={soundIcon}
                label="Mute / Unmute"
                width="24"
                height="24"
              />
              <ProgressBar height={8} progress={36} />
            </div>
          </div>

          <div className={styles['right-buttons-container']}>
            <ButtonIcon
              icon={subtitlesIcon}
              label="Subtitles"
              width="27"
              height="18"
            />
            <ButtonIcon
              icon={settingsIcon}
              label="Settings"
              width="27"
              height="27"
            />
            <ButtonIcon
              icon={screenWidthIcon}
              label="Fit to Screen"
              width="30"
              height="21"
            />
            <ButtonIcon
              icon={fullScreenIcon}
              label="Full Screen"
              width="33"
              height="24"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Player;
