import React from 'react';

import burgerIcon from '../../assets/header-icons/burger-icon.svg';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';

const BurgerIcon = () => {
  return (
    <ButtonIcon
      icon={burgerIcon}
      label="Open menu"
      width="20"
      height="17"
      translateX="2"
      translateY="0.5"
    />
  );
};

export default BurgerIcon;
