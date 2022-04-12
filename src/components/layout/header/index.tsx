import Description from './Description';
import Logo from './Logo';
import { layout } from '../../../configs/layout';

export default function Header() {
  return (
    <header
      className={`${layout.zIndex.header} sticky flex top-0 bg-white dark:bg-black text-center`}
    >
      <Logo />
      <Description />
    </header>
  );
}
