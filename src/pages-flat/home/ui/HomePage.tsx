import { ChatsSidebar, Navbar } from '@/widgets';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <ChatsSidebar />
      </div>
    </div>
  );
};
