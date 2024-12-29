import React from 'react';

import fullScreenIcon from '../../../assets/video-player-page/video-player/full-screen-icon.svg';
import nextIcon from '../../../assets/video-player-page/video-player/next-icon.svg';
import pauseIcon from '../../../assets/video-player-page/video-player/pause-icon.svg';
import settingsIcon from '../../../assets/video-player-page/video-player/settings-icon.svg';
import screenWidthIcon from '../../../assets/video-player-page/video-player/size-icon.svg';
import soundIcon from '../../../assets/video-player-page/video-player/sound-icon.svg';
import subtitlesIcon from '../../../assets/video-player-page/video-player/subtitles-icon.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { videoPlayerPage } from '../../../data/video-player-page.ts';
import ProgressBar from '../ProgressBar/ProgressBar.tsx';
import styles from './player.module.scss';

const Player = () => {
  const screenWidth = window.innerWidth;
  return (
    <article className={styles.container}>
      <img
        className={styles.cover}
        src={videoPlayerPage.cover.base}
        width={1363}
        height={700}
        srcSet={`
        ${videoPlayerPage.cover.mobile} 320w,
        ${videoPlayerPage.cover.base} 1920w,
      `}
        sizes="
          (max-width: 320px) 100vw,
          192rem
        "
        alt=""
      />

      <div className={styles['player-buttons']}>
        <div className={styles.time}>
          <p>{videoPlayerPage.currentTime}</p>
          <p>{videoPlayerPage.time}</p>
        </div>

        {screenWidth !== 320 && <ProgressBar />}

        <div className={styles['buttons-container']}>
          <div className={styles['left-buttons-container']}>
            <button className={styles['pause-button']} aria-label="Pause">
              <img
                className={styles['pause-button-icon']}
                src={pauseIcon}
                alt=""
                width={22}
                height={24}
              />
            </button>

            <button className={styles['next-button']} aria-label="Next video">
              <img src={nextIcon} alt="" width={27} height={18} />
            </button>

            <div className={styles['time-progress-container']}>
              <p>{videoPlayerPage.currentTime}</p>
              <ProgressBar />
              <p>{videoPlayerPage.remainingTime}</p>
            </div>

            <div className={styles['volume-container']}>
              <button
                className={styles['volume-button']}
                aria-label="Mute / Unmute"
              >
                <img
                  className={styles['volume-button-icon']}
                  src={soundIcon}
                  alt=""
                  width={24}
                  height={24}
                />
              </button>

              <div className={styles['volume-bar']}>
                <div className={styles['current-volume']} />
              </div>
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
