import Description from './Description';
import Logo from './Logo';

const Header = () => {
  return (
    <header className='sticky flex top-0 bg-white dark:bg-zinc-900 text-center'>
      <Logo />
      <Description />
    </header>
  );
};

export default Header;
