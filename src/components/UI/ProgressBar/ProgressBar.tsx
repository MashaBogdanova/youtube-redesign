import React from 'react';

import styles from './progress-bar.module.scss';

interface Props {
  height: number;
  progress: number;
  accent?: boolean;
}

const ProgressBar = ({ height, progress, accent }: Props) => {
  return (
    <>
      <div className={styles['progress-bar']} style={{ height }}>
        <div
          className={`${styles['current-progress']} ${accent && styles['current-progress-accent']} `}
          style={{ width: progress }}
        />
      </div>
    </>
  );
};

export default ProgressBar;
