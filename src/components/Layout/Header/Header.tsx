import { layoutConfigs } from '../../../configs/layoutConfigs';
import HeaderLogo from './HeaderLogo';
import PageTitle from './PageName';

export default function Header() {
  return (
    <header
      className={`${layoutConfigs.zIndex.header} sticky flex top-0 bg-white dark:bg-black text-center`}
    >
      <HeaderLogo />
      <PageTitle />
    </header>
  );
}
