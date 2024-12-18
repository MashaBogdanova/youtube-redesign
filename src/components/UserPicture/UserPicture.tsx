import React from 'react';
import userIcon from '../../assets/icons/user-icon.svg';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';

const UserPicture = () => {
  return (
    <ButtonIcon
      icon={userIcon}
      label="Open user profile menu"
      width="40"
      height="40"
    />
  );
};

export default UserPicture;
