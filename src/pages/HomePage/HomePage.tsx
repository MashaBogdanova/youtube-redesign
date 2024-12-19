import React from 'react';
import styles from './home-page.module.scss';
import MostRelevantChannel from './MostRelevantChannel/MostRelevantChannel.tsx';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <MostRelevantChannel />
    </main>
  );
};

export default HomePage;
