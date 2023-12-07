'use client';
import 'react-responsive-modal/styles.css';
import { Modal as ReactModal, ModalProps } from 'react-responsive-modal';

import { CloseIcon } from '@/shared/ui';

import styles from './Modal.module.css';

export const Modal = (props: ModalProps) => {
  return (
    <ReactModal
      center
      classNames={{
        root: styles.modalBg,
        modal: styles.modalBody,
      }}
      closeIcon={<CloseIcon />}
      {...props}
    />
  );
};
