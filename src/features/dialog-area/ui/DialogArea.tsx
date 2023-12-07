'use client';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

import { TopArrowIcon } from '@/shared/ui';

import { IChatHistoryItem } from '@/entities';

type Inputs = {
  promptInput: string;
};

interface IProps {
  currentChat: string;
}

export const DialogArea = ({ currentChat }: IProps) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [dialogMessagesHistory, setDialogMessagesHistory] = useState<
    IChatHistoryItem[]
  >([]);

  useEffect(() => {
    // clear history if chat changed
    setDialogMessagesHistory([]);
  }, [currentChat]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reset();
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    setDialogMessagesHistory((prevState) => [
      ...prevState,
      {
        id: uuid(),
        type: 'user-request',
        content: data.promptInput,
      },
    ]);

    console.log(data, res);
  };

  return (
    <main className='mr-10 flex h-full w-full flex-col justify-between rounded-xl bg-gray-40 p-10'>
      <div className='h-5/6'>
        {dialogMessagesHistory.length === 0 ? (
          <h2 className='mx-auto w-fit text-xl font-bold'>
            {'How can I help you today?'}
          </h2>
        ) : (
          <div className='flex max-h-[95%] flex-col gap-5 overflow-scroll'>
            {dialogMessagesHistory.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex w-full items-center rounded-xl border-[1px] border-gray-10 p-3'
      >
        <input
          placeholder='Write a message'
          className='h-fit w-full border-none bg-transparent outline-0'
          type='text'
          {...register('promptInput')}
        />
        <button type='submit'>
          <TopArrowIcon />
        </button>
      </form>
    </main>
  );
};
