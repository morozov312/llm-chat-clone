export const ChatsSidebar = () => {
  return (
    <aside className='flex min-w-[200px] flex-col gap-10 px-10 py-4'>
      <div className='flex justify-between text-sm font-light text-gray-30'>
        <span> {'Chat list'}</span>
        <button>{'+'}</button>
      </div>
      <ul className='flex flex-col gap-5'>
        <li>{'Main'}</li>
      </ul>
    </aside>
  );
};
