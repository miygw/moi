import Image from 'next/image';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';

const Logo = () => {
  const ctx = useContext(GlobalNavigationContext);
  const setIsOpen = () => ctx.setIsOpen(!ctx.isOpen);
  const isLg = useMediaQuery({query: '(min-width: 1024px)'});

  return (
    <div onClick={isLg ? () => {} : setIsOpen} className='m-2 min-w-fit'>
      <Image src={'/miygw.jpg'} alt='logo' width={50} height={50} />
    </div>
  );
};

export default Logo;
