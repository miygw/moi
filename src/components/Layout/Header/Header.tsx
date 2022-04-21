import { layoutConfigs } from '../../../configs/layoutConfigs';
import HeaderLogo from './HeaderLogo';
import PageTitle from './PageName';

export default function Header() {
  return (
    <header
      className={`${layoutConfigs.zIndex.header} sticky top-0 flex bg-white text-center dark:bg-black`}
    >
      <HeaderLogo />
      <PageTitle />
    </header>
  );
}
