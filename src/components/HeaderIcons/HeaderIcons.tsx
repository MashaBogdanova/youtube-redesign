import React from 'react';

import options from '../../assets/header-icons/header-options-icon.svg';
import notifications from '../../assets/header-icons/notifications-icon.svg';
import videoCall from '../../assets/header-icons/video-call-icon.svg';
import { ButtonIconFields } from '../../types/button-Icon-fields.ts';
import ButtonIcon from '../UI/ButtonIcon/ButtonIcon.tsx';
import styles from './header-icons.module.scss';

const HeaderIcons = () => {
  const icons: ButtonIconFields[] = [
    {
      icon: videoCall,
      label: 'Open video call options',
      width: '27',
      height: '20',
    },
    {
      icon: options,
      label: 'Open options menu',
      width: '21',
      height: '21',
    },
    {
      icon: notifications,
      label: 'View notifications',
      width: '22',
      height: '26',
    },
  ];

  return (
    <ul className={styles.icons}>
      {icons.map((icon) => {
        return (
          <li className={styles.icon} key={icon.label}>
            <ButtonIcon
              icon={icon.icon}
              label={icon.label}
              width={icon.width}
              height={icon.height}
            />
            {icon.label === 'View notifications' && (
              <div className={styles['notifications-count']}>3</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderIcons;
