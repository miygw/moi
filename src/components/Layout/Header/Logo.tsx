import Image from 'next/image';
import { useUIActions, useUIStates } from '~/hooks';

export const Logo = () => {
  const { displaySidebar } = useUIStates();
  const { setDisplaySidebar } = useUIActions();

  return (
    <div
      onClick={
        displaySidebar
          ? () => setDisplaySidebar(false)
          : () => setDisplaySidebar(true)
      }
      className='min-w-fit'
    >
      <Image src='/miygw.jpg' alt='logo' width={50} height={50} />
    </div>
  );
};
