import { Modal } from '@/shared/ui';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ open, onClose }: IProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h3>{'Settings'}</h3>
    </Modal>
  );
};
