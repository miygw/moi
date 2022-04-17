import { layout } from '../../../configs/layout';
import HeaderLogo from './HeaderLogo';
import PageName from './PageName';

export default function Header() {
  return (
    <header
      className={`${layout.zIndex.header} sticky flex top-0 bg-white dark:bg-black text-center`}
    >
      <HeaderLogo />
      <PageName />
    </header>
  );
}
