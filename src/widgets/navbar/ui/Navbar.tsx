import { Logo } from '@/shared/ui';

import { ControlsSection } from '@/features';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-6'>
      <div className='flex cursor-pointer items-center gap-4 font-bold'>
        <Logo />
        <h1>{'LLM Chat Clone'}</h1>
      </div>
      <ControlsSection />
    </nav>
  );
};
