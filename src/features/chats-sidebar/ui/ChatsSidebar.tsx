'use client';
import { Dispatch, SetStateAction } from 'react';
import { Tooltip } from 'react-tooltip';

interface IProps {
  chatList?: string[];
  onChatClick?: Dispatch<SetStateAction<string>>;
}
export const ChatsSidebar = ({ chatList, onChatClick }: IProps) => {
  const onAddNewChat = () => {
    console.log('add new chat');
  };

  return (
    <aside className='flex min-w-[200px] flex-row gap-10 px-10 py-4 lg:flex-col'>
      <div className='flex items-center justify-between gap-3 text-sm font-light text-gray-30'>
        <span> {'Chat list'}</span>
        <button onClick={onAddNewChat}>
          <Tooltip id='new-chat' />
          <a
            className='font-medium transition-all hover:text-gray-20'
            data-tooltip-id='new-chat'
            data-tooltip-content='New chat'
            data-tooltip-place='bottom'
          >
            {'+'}
          </a>
        </button>
      </div>
      <ul className='flex flex-col gap-5'>
        {chatList?.map((chat) => (
          <li
            className='cursor-pointer rounded-xl px-4 py-2 transition-all hover:bg-gray-40'
            onClick={() => onChatClick?.(chat)}
            key={chat}
          >
            {chat}
          </li>
        ))}
      </ul>
    </aside>
  );
};
