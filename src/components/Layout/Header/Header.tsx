import { layoutConfigs } from '../../../configs/layoutConfigs';
import { Logo } from './Logo';
import { PageTitle } from './PageTitle';

export const Header = () => {
  return (
    <header
      className={`${layoutConfigs.zIndex.header} sticky top-0 flex bg-white text-center dark:bg-black`}
    >
      <Logo />
      <PageTitle />
    </header>
  );
};
