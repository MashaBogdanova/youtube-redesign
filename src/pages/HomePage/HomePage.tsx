import React from 'react';

import styles from './home-page.module.scss';
import MostRelevantChannel from './MostRelevantChannel/MostRelevantChannel.tsx';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos.tsx';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <MostRelevantChannel />
      <RecommendedVideos />
    </main>
  );
};

export default HomePage;
