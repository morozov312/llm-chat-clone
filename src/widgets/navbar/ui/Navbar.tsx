import { Logo } from '@/shared/ui';

import { ControlsSection } from '@/features';

export const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 py-6'>
      <Logo />
      <ControlsSection />
    </nav>
  );
};
