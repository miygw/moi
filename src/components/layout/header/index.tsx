import Description from './Description';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='sticky flex top-0 bg-white dark:bg-black text-center'>
      <Logo />
      <Description />
    </header>
  );
}
