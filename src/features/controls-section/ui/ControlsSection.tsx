'use client';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { AccountIcon, AppsIcon, SettingsIcon, SupportIcon } from '@/shared/ui';

import { SettingsModal } from '@/entities';

import styles from './ControlsSections.module.css';

export const ControlsSection = () => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  const toggleModal = () => setShowSettingsModal((prevState) => !prevState);

  const onSettingsClick = () => toggleModal();

  const onAppsClick = () => console.log('click on apps');

  const onSupportClick = () => console.log('click on support');

  const onAccountClick = () => console.log('click on account');

  return (
    <div className='flex items-center gap-5 pr-10'>
      <a
        className={styles.controlButton}
        data-tooltip-id='settings'
        data-tooltip-content='Settings'
        data-tooltip-place='bottom'
      >
        <SettingsModal open={showSettingsModal} onClose={toggleModal} />
        <Tooltip id='settings' />
        <div onClick={onSettingsClick}>
          <SettingsIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='apps'
        data-tooltip-content='Apps'
        data-tooltip-place='bottom'
      >
        <Tooltip id='apps' />
        <div onClick={onAppsClick}>
          <AppsIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='support'
        data-tooltip-content='Support'
        data-tooltip-place='bottom'
      >
        <Tooltip id='support' />
        <div onClick={onSupportClick}>
          <SupportIcon />
        </div>
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='account'
        data-tooltip-content='Account'
        data-tooltip-place='bottom'
      >
        <Tooltip id='account' />
        <div onClick={onAccountClick}>
          <AccountIcon />
        </div>
      </a>
    </div>
  );
};
