'use client';
import { useState } from 'react';

import { ChatsSidebar } from '@/features';

const CHATS: string[] = ['Main'];

export const Chats = () => {
  const [currentChat, setCurrentChat] = useState<string>(CHATS[0]);

  console.log(currentChat);

  return (
    <div className='flex'>
      <ChatsSidebar chatList={CHATS} onChatClick={setCurrentChat} />
    </div>
  );
};
