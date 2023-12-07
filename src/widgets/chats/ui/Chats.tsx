'use client';
import { useState } from 'react';

import { ChatsSidebar, DialogArea } from '@/features';

const CHATS: string[] = ['Main'];

export const Chats = () => {
  const [currentChat, setCurrentChat] = useState<string>(CHATS[0]);

  return (
    <div className='flex h-[85%] flex-col lg:flex-row'>
      <ChatsSidebar chatList={CHATS} onChatClick={setCurrentChat} />
      <DialogArea currentChat={currentChat} />
    </div>
  );
};
