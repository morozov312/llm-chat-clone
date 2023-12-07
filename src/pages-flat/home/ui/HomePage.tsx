import { Chats, Navbar } from '@/widgets';

export const HomePage = () => {
  return (
    <div className='h-screen w-screen items-start'>
      <Navbar />
      <Chats />
    </div>
  );
};
