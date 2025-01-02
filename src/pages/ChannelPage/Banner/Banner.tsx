import React from 'react';

import { channelPage } from '../../../data/channel-page.ts';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <picture>
        <source
          srcSet={channelPage.channelBanner.mobile}
          media="(max-width: 320px)"
        />
        <img
          className={styles.image}
          src={channelPage.channelBanner.base}
          alt=""
        />
      </picture>
    </section>
  );
};

export default Banner;
