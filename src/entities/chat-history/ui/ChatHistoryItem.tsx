import { IChatHistoryItem } from '@/entities';
import Markdown from 'react-markdown';
import { useId } from 'react';

interface IProps {
  item: IChatHistoryItem;
}

export const ChatHistoryItem = ({ item }: IProps) => {
  const id = useId();
  switch (item.type) {
    case 'chat-responce':
      return (
        <div className='flex flex-col gap-2 leading-7'>
          <span className='font-bold'>{'Chat'}</span>
          <Markdown className='leading-7 text-sm'>{item.content}</Markdown>
        </div>
      );
    case 'user-request':
      return (
        <div className='flex flex-col gap-2'>
          <span className='font-bold'>{'You'}</span>
          <span className='text-sm'>{item.content}</span>
        </div>
      );
    default:
      return null;
  }
};
