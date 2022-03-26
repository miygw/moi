import Description from './Description';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='sticky flex mx-1 sm:mx-2 top-0 py-1 bg-white dark:bg-black text-center'>
      <Logo />
      <Description />
    </header>
  );
};

export default Header;
