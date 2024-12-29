import React from 'react';

import nextIcon from '../../../assets/video-player-page/video-player/next-icon.svg';
import pauseIcon from '../../../assets/video-player-page/video-player/pause-icon.svg';
import soundIcon from '../../../assets/video-player-page/video-player/sound-icon.svg';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon.tsx';
import { playerButtons } from '../../../config/player-buttons.ts';
import {
  SCREEN_WIDTH_DESKTOP,
  SCREEN_WIDTH_MOBILE,
} from '../../../consts/consts.ts';
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
        ${videoPlayerPage.cover.mobile} ${SCREEN_WIDTH_MOBILE}w,
        ${videoPlayerPage.cover.base} ${SCREEN_WIDTH_DESKTOP}w,
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

        {screenWidth !== SCREEN_WIDTH_MOBILE && <ProgressBar />}

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

            <ButtonIcon
              icon={nextIcon}
              label="Next video"
              isShownOnMobile={false}
            />

            <div
              className={styles['time-progress-container']}
              aria-label="Video playback progress"
            >
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

              <div
                className={styles['volume-bar']}
                aria-label={'Set volume level'}
              >
                <div className={styles['current-volume']} />
              </div>
            </div>
          </div>

          <div className={styles['right-buttons-container']}>
            {playerButtons.map((item) => (
              <ButtonIcon
                icon={item.icon}
                label={item.label}
                width={item.width}
                height={item.height}
                key={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Player;
