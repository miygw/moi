import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className='sticky justify-center w-full top-0 py-1 bg-white dark:bg-black flex text-center'>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
