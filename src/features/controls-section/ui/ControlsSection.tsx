import { Tooltip } from 'react-tooltip';

import { AccountIcon, AppsIcon, SettingsIcon, SupportIcon } from '@/shared/ui';

import styles from './ControlsSections.module.css';

export const ControlsSection = () => {
  return (
    <div className='flex items-center gap-5 pr-10'>
      <a
        className={styles.controlButton}
        data-tooltip-id='settings'
        data-tooltip-content='Settings'
        data-tooltip-place='bottom'
      >
        <Tooltip id='settings' />
        <SettingsIcon />
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='apps'
        data-tooltip-content='Apps'
        data-tooltip-place='bottom'
      >
        <Tooltip id='apps' />
        <AppsIcon />
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='support'
        data-tooltip-content='Support'
        data-tooltip-place='bottom'
      >
        <Tooltip id='support' />
        <SupportIcon />
      </a>
      <a
        className={styles.controlButton}
        data-tooltip-id='account'
        data-tooltip-content='Account'
        data-tooltip-place='bottom'
      >
        <Tooltip id='account' />
        <AccountIcon />
      </a>
    </div>
  );
};
