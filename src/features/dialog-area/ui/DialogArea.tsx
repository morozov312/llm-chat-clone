'use client';
import { useEffect, useState } from 'react';

import { TopArrowIcon } from '@/shared/ui';

interface IProps {
  currentChat: string;
}

export const DialogArea = ({ currentChat }: IProps) => {
  const [dialogMessagesHistory, setDialogMessagesHistory] = useState<string[]>(
    [],
  );

  useEffect(() => {
    // clear history if chat changed
    setDialogMessagesHistory([]);
  }, [currentChat]);

  return (
    <main className='mr-10 flex h-full w-full flex-col justify-between rounded-xl bg-gray-40 p-10'>
      <div className='h-5/6'>
        {dialogMessagesHistory.length === 0 ? (
          <h2 className='mx-auto w-fit text-xl font-bold'>
            {'How can I help you today?'}
          </h2>
        ) : (
          <div></div>
        )}
      </div>
      <div className='flex w-full items-center rounded-xl border-[1px] border-gray-10 p-3'>
        <input
          placeholder='Write a message'
          className='h-fit w-full border-none bg-transparent outline-0'
          type='text'
        />
        <button>
          <TopArrowIcon />
        </button>
      </div>
    </main>
  );
};
