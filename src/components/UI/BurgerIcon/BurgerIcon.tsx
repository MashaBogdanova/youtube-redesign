import React from 'react';
import burgerIcon from '../../../assets/icons/burger-icon.svg';
import styles from './burger-icon.module.scss';

const BurgerIcon = () => {
  return (
    <button className={styles.burger} aria-label="Open menu">
      <img src={burgerIcon} alt="" width="20" height="17" />
    </button>
  );
};

export default BurgerIcon;
