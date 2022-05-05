import Image from 'next/image';
import { useUI } from '../../../hooks';

export default function Logo() {
  const { displaySidebar, openSidebar, closeSidebar } = useUI();

  return (
    <div
      onClick={displaySidebar ? () => closeSidebar() : () => openSidebar()}
      className='min-w-fit lg:m-1'
    >
      <Image src='/miygw.jpg' alt='logo' width={45} height={45} />
    </div>
  );
}
