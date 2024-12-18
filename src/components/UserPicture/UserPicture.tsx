import React from 'react';
import userIcon from '../../assets/header-icons/user-icon.svg';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';

const UserPicture = () => {
  return (
    <ButtonIcon
      icon={userIcon}
      label="Open user profile menu"
      width="40"
      height="40"
      translateX="50"
    />
  );
};

export default UserPicture;
