import Image from 'next/image';
import { useContext } from 'react';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';

const Logo = () => {
  const ctx = useContext(GlobalNavigationContext);
  const setIsOpen = () => ctx.setIsOpen(!ctx.isOpen);

  return (
    <a onClick={setIsOpen}>
      <Image src={'/miygw.jpg'} alt='logo' width={40} height={40} />
    </a>
  );
};

export default Logo;
