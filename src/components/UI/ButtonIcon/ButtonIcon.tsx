import React from 'react';
import styles from './button-icon.module.scss';
import { ButtonIconFields } from '../../../types/ButtonIconFields.ts';

const ButtonIcon = ({
  icon,
  label,
  width,
  height,
  translateX = 0,
  translateY = 0,
}: ButtonIconFields) => {
  return (
    <button
      className={styles.button}
      aria-label={label}
      style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
    >
      <img src={icon} alt="" width={width} height={height} />
    </button>
  );
};

export default ButtonIcon;
