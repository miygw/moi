import Image from 'next/image';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { GlobalNavigationContext } from '../../provider/GlobalNavigationProvider';

const Logo = () => {
  const ctx = useContext(GlobalNavigationContext);
  const setIsOpen = () => ctx.setIsOpen(!ctx.isOpen);
  const isLg = useMediaQuery({query: '(min-width: 1024px)'});
  const doNothing = () => {};

  return (
    <div onClick={isLg ? doNothing : setIsOpen} className={`$lg:m-1 min-w-fit`}>
      <Image src={'/miygw.jpg'} alt='logo' width={45} height={45} />
    </div>
  );
};

export default Logo;
