import Image from 'next/image';
import { useUI } from '../../../hooks';

export const Logo = () => {
  const { displaySidebar, openSidebar, closeSidebar } = useUI();

  return (
    <div
      onClick={displaySidebar ? () => closeSidebar() : () => openSidebar()}
      className='min-w-fit'
    >
      <Image src='/miygw.jpg' alt='logo' width={50} height={50} />
    </div>
  );
};
