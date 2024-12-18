import React from 'react';
import styles from './button-icon.module.scss';
import { ButtonIconFields } from '../../../types/ButtonIconFields.ts';

const ButtonIcon = ({ icon, label, width, height }: ButtonIconFields) => {
  return (
    <button className={styles.button} aria-label={label}>
      <img src={icon} alt="" width={width} height={height} />
    </button>
  );
};

export default ButtonIcon;
