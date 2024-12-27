import React from 'react';

import styles from './home-page.module.scss';
import MostRelevantChannel from './MostRelevantChannel/MostRelevantChannel.tsx';
import RecommendedChannel from './RecommendedChannel/RecommendedChannel.tsx';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos.tsx';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <section>
        <MostRelevantChannel />
      </section>
      <section className={styles.section}>
        <RecommendedVideos />
      </section>
      <section className={styles.section}>
        <RecommendedChannel />
      </section>
    </main>
  );
};

export default HomePage;
