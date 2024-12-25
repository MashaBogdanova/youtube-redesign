import React from 'react';

import styles from './toggle.module.scss';

const Toggle = () => {
  return (
    <label className={styles.container}>
      <div className={styles.label}>Autoplay</div>
      <input className={styles.toggle} type="checkbox" name="autoplay" />
      <div className={styles.slider} />
    </label>
  );
};

export default Toggle;
