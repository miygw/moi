import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';

const Logo = () => {
  const ctx = useContext(GlobalNavigationContext);
  const setIsOpen = () => ctx.setIsOpen(!ctx.isOpen);

  return (
    <a onClick={setIsOpen}>
      <Image src={'/miygw.jpg'} alt='logo' width={50} height={50} />
    </a>
  );
};

export default Logo;
