import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Modal, Select } from '@/shared/ui';

import styles from './SettingsModal.module.css';

type Inputs = {
  theme: string;
  layout: string;
  option: string;
  profile: string;
};

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ open, onClose }: IProps) => {
  const form = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('New settings is: ', data);

  return (
    <Modal open={open} onClose={onClose}>
      <h3 className='mt-[-4px] text-lg font-bold leading-5'>{'Settings'}</h3>
      <FormProvider {...form}>
        <form
          className={styles.formWrapper}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <div className={styles.controlRow}>
              <label htmlFor='theme'>{'Theme'}</label>
              <Select name='theme'>
                <option value='theme-1'>{'Theme 1'}</option>
                <option value='theme-2'>{'Theme 2'}</option>
              </Select>
            </div>
            <div className={styles.controlRow}>
              <label htmlFor='layout'>{'Layouts'}</label>
              <Select name='layout' id='layout'>
                <option value='layout-1'>{'Layout 1'}</option>
                <option value='layout-2'>{'Layout 2'}</option>
              </Select>
            </div>
            <div className={styles.controlRow}>
              <label htmlFor='option'>{'Options'}</label>
              <Select name='option' id='option'>
                <option value='option-1'>{'Option 1'}</option>
                <option value='option-2'>{'Option 2'}</option>
              </Select>
            </div>
            <div className={styles.controlRow}>
              <label htmlFor='profile'>{'Profile'}</label>
              <Select name='profile' id='profile'>
                <option value='profile-1'>{'Profile 1'}</option>
                <option value='profile-2'>{'Profile 2'}</option>
              </Select>
            </div>
          </div>
          <button className={styles.submitBtn} type='submit'>
            {'Submit'}
          </button>
        </form>
      </FormProvider>
    </Modal>
  );
};
