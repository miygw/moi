import Logo from './Logo';
import Menu from './Menu';

const Header = () => {
  return (
    <header className='flex justify-center flex-wrap text-center mt-4 mb-12'>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
