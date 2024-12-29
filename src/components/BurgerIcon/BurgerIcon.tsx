import React from 'react';

import burgerIcon from '../../assets/header-icons/burger-icon.svg';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';
import styles from './burger-icon.module.scss';

const BurgerIcon = () => {
  return (
    <div className={styles.container}>
      <ButtonIcon
        icon={burgerIcon}
        label="Open menu"
        translateX={2}
        translateY={0.5}
      />
    </div>
  );
};

export default BurgerIcon;
