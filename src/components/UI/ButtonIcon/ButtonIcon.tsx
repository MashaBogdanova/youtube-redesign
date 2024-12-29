import React from 'react';

import { ButtonIconFields } from '../../../types/button-Icon-fields.ts';
import styles from './button-icon.module.scss';

const ButtonIcon = ({
  icon,
  label,
  width,
  height,
  translateX = 0,
  translateY = 0,
  rotate = 0,
  scale = 1,
  isShownOnMobile = true,
}: ButtonIconFields) => {
  return (
    <button
      className={isShownOnMobile ? styles.button : styles.hidden}
      aria-label={label}
      style={{
        transform: `
        translate(${translateX}px, ${translateY}px) 
        rotate(${rotate}deg) 
        scale(${scale})`,
      }}
    >
      <img src={icon} alt="" width={width} height={height} />
    </button>
  );
};

export default ButtonIcon;
