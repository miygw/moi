import Image from 'next/image';
import { useUI } from '../../../hooks/useUI';

export default function Logo() {
  const { displaySidebar, openSidebar, closeSidebar } = useUI();
  const onClick = displaySidebar ? () => closeSidebar() : () => openSidebar();

  return (
    <div onClick={() => onClick()} className={`$lg:m-1 min-w-fit`}>
      <Image src={'/miygw.jpg'} alt='logo' width={45} height={45} />
    </div>
  );
}
