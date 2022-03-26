import Description from './Description';
import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className='sticky justify-center mx-6 top-0 py-1 bg-white dark:bg-black flex text-center'>
      <Logo />
      <Description/>
      <Menu />
    </header>
  );
};

export default Header;
